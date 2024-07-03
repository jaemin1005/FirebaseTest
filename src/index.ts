import functions from 'firebase-functions';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Firebase!');
});

export const api = functions.https.onRequest(app);