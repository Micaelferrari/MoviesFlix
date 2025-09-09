import { Request, Response } from "express";

export const getMovies = (req: Request, res: Response) => {
    res.status(200).json({ movie: "homem de ferro" });
};