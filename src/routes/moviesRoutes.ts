import { Router } from "express";
import { getAllMovies, getMovieById, createMovie } from "../controller/moviesController";

const moviesRoutes = Router();

moviesRoutes.get("/list", getAllMovies);
moviesRoutes.get("/:id", getMovieById);
moviesRoutes.post("/", createMovie)

export default moviesRoutes;
