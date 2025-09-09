import { Router } from "express";
import moviesRoutes from "./routes/moviesRoutes"

const router = Router();

router.use("/movies", moviesRoutes);
router.use("/users", /*colocar aqui depois as rotas do usuário*/);
router.use("/ratings", /* colocar aqui depois as rotas do ratings*/)

export default router;
