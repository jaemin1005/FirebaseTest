import express from "express";
import path from "path";

export function app() {
  const app = express();

  app.use(express.static(path.join(__dirname, 'public')));
  return app;
}