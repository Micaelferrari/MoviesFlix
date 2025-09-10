import { Router } from "express";
import { getAllMovies, getMovieById } from "../controller/moviesController";

const moviesRoutes = Router();

moviesRoutes.get("/list", getAllMovies);
moviesRoutes.get("/:id", getMovieById);

export default moviesRoutes;
