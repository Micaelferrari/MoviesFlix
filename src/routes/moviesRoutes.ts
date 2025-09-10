import { Router } from "express"
import { getAllMovies } from '../controller/moviesController';


const moviesRoutes = Router();


moviesRoutes.get("/", getAllMovies )

export default moviesRoutes;