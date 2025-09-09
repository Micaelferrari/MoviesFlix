import { Router } from "express";
import { getMovies } from "./controller/moviesController";

const router = Router();

router.get("/movies", getMovies);

export default router;
