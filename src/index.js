import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.status(200).json('demo api');
});

app.get('/user', (req, res) => {
  res.status(200).json('welcome login');
});

app.get('/login', (req, res) => {
  res.status(200).json('welcome to users');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`🚀 Running on http://localhost:${port}`));
}
