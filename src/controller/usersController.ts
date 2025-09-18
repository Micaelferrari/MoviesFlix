import { Request, Response } from "express";
import * as serviceUser from "../services/userService";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const data = await serviceUser.getAllUsers();

    if (data.length === 0) {
      return res.status(204).json("Não há usuários");
    }

    return res.status(200).json(data);
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json("Erro no servidor");
  }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const data = await serviceUser.getUserById(id);
        
    } catch (error : any) {
         console.log(error.message);
    return res.status(500).json("Erro no servidor");
    }
};

export const createUser = async (req: Request, res: Response) => {};

export const deleteUser = async (req: Request, res: Response) => {};

export const updateUser = async (req: Request, res: Response) => {};
