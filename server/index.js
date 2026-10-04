import express from 'express';
import cors from 'cors';
import { pathToFileURL } from 'node:url';
import { host, port, maxAnalyzePayloadMb, presentationPrecomputedRoot } from './config.js';
import {
  analyzeEula,
  generateCategoryCards,
  generateCategoryCardsBatch,
  generateCategoryComic,
  generateCategoryVideo,
  generateCategoryVideoScript,
  getVideoStatus,
  health,
  renderCategoryComicImage
} from './handlers.js';
import { errorPayload, getErrorStatus } from './http.js';

const app = express();

function asyncRoute(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
}

app.use(cors());
app.use(express.json({ limit: `${maxAnalyzePayloadMb}mb` }));
app.use('/api/presentation/assets', express.static(presentationPrecomputedRoot));

app.get('/api/health', (_req, res) => {
  res.json(health());
});

app.post('/api/analyze', asyncRoute(async (req, res) => {
  res.json(await analyzeEula(req.body));
}));

app.post('/api/categories/cards', asyncRoute(async (req, res) => {
  res.json(await generateCategoryCards(req.body));
}));

app.post('/api/categories/cards/batch', asyncRoute(async (req, res) => {
  res.json(await generateCategoryCardsBatch(req.body));
}));

app.post('/api/categories/comic', asyncRoute(async (req, res) => {
  res.json(await generateCategoryComic(req.body));
}));

app.post('/api/categories/video/script', asyncRoute(async (req, res) => {
  res.json(await generateCategoryVideoScript(req.body));
}));

app.post('/api/categories/comic/render', asyncRoute(async (req, res) => {
  res.json(await renderCategoryComicImage(req.body));
}));

app.post('/api/videos/generate', asyncRoute(async (req, res) => {
  res.json(await generateCategoryVideo(req.body));
}));

app.get('/api/videos/:jobId', asyncRoute(async (req, res) => {
  res.json(await getVideoStatus(req.params.jobId));
}));

app.use((error, _req, res, next) => {
  if (error?.type === 'entity.too.large') {
    return res.status(413).json({
      error: `This EULA is too large to analyze in one request. Try a shorter document or paste the relevant sections.`
    });
  }

  const statusCode = getErrorStatus(error, 500);
  if (statusCode >= 400 && statusCode < 600) {
    return res.status(statusCode).json(errorPayload(error, 'Request failed.'));
  }

  return next(error);
});

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  app.listen(port, host, () => console.log(`EULALens API listening on http://${host}:${port}`));
}

export default app;
