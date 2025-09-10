import { Request, Response } from "express";
import * as service from "./../services/moviesServices";

export const getAllMovies = async (req: Request, res: Response) => {
  const data = await service.getAllMoviesServices();
  res.status(200).json(data);
};

export const getMovieById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const data = await service.getMovieByIdServices(id);

  res.status(200).json(data);
};

export const createMovie = async (req : Request, res : Response) => {

  const { id, name, description } = req.body;

  const data = await service.createMovieServices(id, name, description);

  res.status(201).json(" Filme criado com sucesso");

}
