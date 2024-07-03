import express from "express";
import path from "path";
import * as functions from 'firebase-functions';

const app = express();
// app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.send("Hello, world");
})

app.listen(3000);