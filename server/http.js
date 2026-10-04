export function httpError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

export function getErrorStatus(error, fallback = 500) {
  return Number.isInteger(error?.statusCode) ? error.statusCode : fallback;
}

export function errorPayload(error, fallbackMessage) {
  const payload = { error: error?.message || fallbackMessage };
  if (error?.details) payload.details = error.details;
  return payload;
}
