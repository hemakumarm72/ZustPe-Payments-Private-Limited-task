import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import userRouter from './Routers/user';

const app = express();
const port = process.env.PORT || 8000;
app.use(cors({
  origin: ['http://localhost:8000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
function ignoreFavicon(req, res, next) {
  if (req.originalUrl.includes('favicon.ico')) {
    res.status(204).end();
  }
  next();
}
app.use(ignoreFavicon);

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.status(200).json('zustpe payment  api');
});

app.use('/user', userRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`🚀 Running on http://localhost:${port}`));
}
