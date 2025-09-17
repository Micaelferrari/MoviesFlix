import { Router } from 'express';
import { getAllUsers, getUserById, createUser, deleteUser, updateUser } from '../controller/usersController'

const usersRoutes = Router();

usersRoutes.get("/list", getAllUsers);
usersRoutes.get("/:id", getUserById);
usersRoutes.post("/", createUser);
usersRoutes.delete('/:id', deleteUser);
usersRoutes.patch("/:id", updateUser)

export default usersRoutes;