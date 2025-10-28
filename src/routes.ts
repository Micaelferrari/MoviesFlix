import { Router } from "express";
import moviesRoutes from "./routes/moviesRoutes"
import usersRoutes from "./routes/usersRoutes"

const router = Router();

router.use("/movies", moviesRoutes);
router.use("/users", usersRoutes);

export default router;
