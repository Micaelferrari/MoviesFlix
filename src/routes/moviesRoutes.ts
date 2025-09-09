import { Router } from "express";
import { getMovies } from "./../controller/moviesController";

const moviesRoutes = Router();

moviesRoutes.get("/", getMovies);

export default moviesRoutes;
