#!/usr/bin/env bash
set -euo pipefail

ROOT="/data/d1/vanishri/EULALens"
PROJECT="$ROOT/eulalens-project-dev"
RUNTIME="$PROJECT/.runtime"
LOGS="$RUNTIME/logs"

QWEN="$ROOT/scripts_dev/qwen-3.5-9b"
HIDREAM="$ROOT/scripts_dev/hidream-o1-image-2604"
LTX="$ROOT/scripts_dev/ltx-2.3"
CLOUDFLARED="$QWEN/bin/cloudflared"

mkdir -p "$LOGS"

echo "========================================"
echo " Starting EULALens"
echo "========================================"

wait_for_port() {
    local name="$1"
    local port="$2"
    local timeout="$3"

    echo "[WAIT] $name on port $port..."

    for ((i=1; i<=timeout; i++)); do
        if ss -ltn 2>/dev/null | grep -q ":${port} "; then
            echo "[READY] $name"
            return 0
        fi
        sleep 1
    done

    echo "[ERROR] $name did not become ready within ${timeout}s."
    echo "        Check: $LOGS/${name}.log"
    return 1
}

start_service() {
    local name="$1"
    local port="$2"
    shift 2

    if ss -ltn 2>/dev/null | grep -q ":${port} "; then
        echo "[OK] $name already running on port $port"
        return 0
    fi

    echo "[START] $name"
    nohup setsid "$@" >"$LOGS/${name}.log" 2>&1 &
    echo $! >"$RUNTIME/${name}.pid"
}

start_tunnel() {
    local name="$1"
    local local_url="$2"
    local logfile="$LOGS/${name}.log"
    local pidfile="$RUNTIME/${name}.pid"

    if [[ ! -x "$CLOUDFLARED" ]]; then
        echo "[ERROR] cloudflared not found at:"
        echo "        $CLOUDFLARED"
        return 1
    fi

    rm -f "$logfile"

    echo "[START] $name"

    nohup setsid "$CLOUDFLARED" tunnel \
        --no-autoupdate \
        --protocol http2 \
        --url "$local_url" \
        >"$logfile" 2>&1 &

    echo $! >"$pidfile"
}

wait_for_tunnel_url() {
    local name="$1"
    local timeout="${2:-30}"
    local logfile="$LOGS/${name}.log"
    local url=""

    echo "[WAIT] $name URL..."

    for ((i=1; i<=timeout; i++)); do
        if [[ -f "$logfile" ]]; then
            url="$(
                grep -Eo 'https://[A-Za-z0-9-]+\.trycloudflare\.com' "$logfile" \
                | head -1 || true
            )"
        fi

        if [[ -n "$url" ]]; then
            printf '%s\n' "$url"
            return 0
        fi

        sleep 1
    done

    echo "[ERROR] Could not obtain URL for $name." >&2
    echo "        Check: $logfile" >&2
    return 1
}


# ---------------------------------------------------------
# 1. Qwen - GPU 0
# ---------------------------------------------------------

start_service qwen 8000 \
    env CUDA_VISIBLE_DEVICES=0 GPU_MEMORY_UTILIZATION=0.6 \
    "$QWEN/serve_qwen35_9b_vllm.sh"

wait_for_port qwen 8000 180


# ---------------------------------------------------------
# 2. HiDream - GPU 1
# ---------------------------------------------------------

start_service hidream 5052 \
    env CUDA_VISIBLE_DEVICES=1 \
    "$HIDREAM/serve_hidream_image.sh"

wait_for_port hidream 5052 180


# ---------------------------------------------------------
# 3. LTX - GPU 1
#    LTX_OFFLOAD=cpu is read from its existing .env
# ---------------------------------------------------------

start_service ltx 5054 \
    "$LTX/serve_ltx23_video.sh"

wait_for_port ltx 5054 60


# ---------------------------------------------------------
# 4. Backend
# ---------------------------------------------------------

if ss -ltn 2>/dev/null | grep -q ":5050 "; then
    echo "[OK] backend already running on port 5050"
else
    echo "[START] backend"

    nohup setsid bash -lc "
        cd '$PROJECT'
        exec conda run --no-capture-output -n eulalens-web \
            env HOST=127.0.0.1 npm run server
    " >"$LOGS/backend.log" 2>&1 &

    echo $! >"$RUNTIME/backend.pid"
fi

wait_for_port backend 5050 60


# ---------------------------------------------------------
# 5. Backend Cloudflare tunnel
# ---------------------------------------------------------

start_tunnel backend-tunnel "http://127.0.0.1:5050"

BACKEND_URL="$(wait_for_tunnel_url backend-tunnel 45 | tail -1)"

if [[ ! "$BACKEND_URL" =~ ^https://.*\.trycloudflare\.com$ ]]; then
    echo "[ERROR] Invalid backend tunnel URL:"
    echo "        $BACKEND_URL"
    exit 1
fi

echo "[READY] Backend tunnel: $BACKEND_URL"


# ---------------------------------------------------------
# 6. Runtime browser configuration
# ---------------------------------------------------------

cat >"$RUNTIME/config.js" <<CONFIG
window.EULALENS_API_BASE = '${BACKEND_URL}';
CONFIG

echo "[READY] Runtime API configuration created."


# ---------------------------------------------------------
# 7. Frontend
# ---------------------------------------------------------

if ss -ltn 2>/dev/null | grep -q ":8080 "; then
    echo "[OK] frontend already running on port 8080"
else
    echo "[START] frontend"

    nohup setsid bash -lc "
        cd '$PROJECT'
        exec python3 -m http.server 8080 --bind 127.0.0.1
    " >"$LOGS/frontend.log" 2>&1 &

    echo $! >"$RUNTIME/frontend.pid"
fi

wait_for_port frontend 8080 30


# ---------------------------------------------------------
# 8. Frontend Cloudflare tunnel
# ---------------------------------------------------------

start_tunnel frontend-tunnel "http://127.0.0.1:8080"

FRONTEND_URL="$(wait_for_tunnel_url frontend-tunnel 45 | tail -1)"

if [[ ! "$FRONTEND_URL" =~ ^https://.*\.trycloudflare\.com$ ]]; then
    echo "[ERROR] Invalid frontend tunnel URL:"
    echo "        $FRONTEND_URL"
    exit 1
fi

echo "[READY] Frontend tunnel: $FRONTEND_URL"


# ---------------------------------------------------------
# Summary
# ---------------------------------------------------------

cat >"$RUNTIME/urls.env" <<URLS
BACKEND_URL=$BACKEND_URL
FRONTEND_URL=$FRONTEND_URL
URLS

echo
echo "========================================"
echo " EULALens is ready"
echo "========================================"
echo
echo "Frontend:"
echo "  $FRONTEND_URL"
echo
echo "Backend:"
echo "  $BACKEND_URL"
echo
echo "Logs:"
echo "  $LOGS"
echo
echo "Open the FRONTEND URL in your browser."
echo "========================================"
