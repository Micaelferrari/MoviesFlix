import { getMovies } from './controller/moviesController';
import express, { Request, Response} from "express";

function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/", getMovies);

  return app;
}

export default createApp;
