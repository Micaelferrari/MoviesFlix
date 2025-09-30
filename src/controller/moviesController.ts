import { MoviesModel } from "./../models/MoviesModel";
import { Request, Response } from "express";
import * as service from "./../services/moviesServices";

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const data = await service.getAllMoviesService();

    if (data.length === 0) {
      return res.status(204).json("Não há filmes");
    }

    return res.status(200).json(data);
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error.message || "Erro no servidor " });
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id) || id <= 0) {
      return res.status(400).json("Id inválido.");
    }

    const data = await service.getMovieByIdService(id);

    if (!data) {
      return res.status(404).json("Filme não encontrado");
    }

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Erro no servidor" });
  }
};

export const createMovie = async (req: Request, res: Response) => {
  try {
    const { id, name, description } = req.body;

    if (!name || !description) {
      return res.status(404).json("Nome e Descrição são obrigatórios");
    }

    const data = await service.createMovieService(id, name, description);

    res.status(201).json({data, message : " Filme criado com sucesso"});
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Erro no servidor" });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const deleted = await service.deleteMovieService(id);

    if (!deleted) {
      return res.status(404).json({ error: "Filme não encontrado" });
    }

    return res.status(200).json({ message: "Filme deletado com sucesso" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Erro no servidor" });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const bodyValue: MoviesModel = req.body;

    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const upMovies = await service.updateMovieService(id, bodyValue);

    if(!upMovies){
      return res.status(404).json({ error: "Filme não encontrado" });
    }

    return res.status(200).json("Filme atualizado com sucesso");
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Erro no servidor" });
  }
};


//validar existencia de um usuário, services
//
