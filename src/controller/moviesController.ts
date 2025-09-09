import { Request, Response } from "express";
import { getMoviesServices } from './../services/moviesServices';

export const getMovies = async (req: Request, res: Response) => {
    
    const data = await getMoviesServices();
    res.status(200).json(data);
};