import { Router } from "express";
import { getAllMovies, getMovieById, createMovie, deleteMovie } from "../controller/moviesController";

const moviesRoutes = Router();

moviesRoutes.get("/list", getAllMovies);
moviesRoutes.get("/:id", getMovieById);
moviesRoutes.post("/", createMovie)
moviesRoutes.delete("/:id", deleteMovie)
export default moviesRoutes;
