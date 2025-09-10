import { Request, Response } from "express";
import { getAllMoviesServices } from "./../services/moviesServices";

export const getAllMovies = async (req: Request, res: Response) => {
  const data = await getAllMoviesServices();
  res.status(200).json(data);
};
