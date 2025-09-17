import { Router } from "express";
import moviesRoutes from "./routes/moviesRoutes"
import usersRoutes from "./routes/usersRoutes"

const router = Router();

router.use("/movies", moviesRoutes);
router.use("/users", usersRoutes);
//router.use("/ratings", /* colocar aqui depois as rotas do ratings*/)

export default router;
