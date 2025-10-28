import { usersModel } from './../models/usersModel';
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
    return res.status(200).json(data);
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json("Erro no servidor");
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { id, name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios" });
  }

  if (typeof name !== "string" || typeof email !== "string") {
    return res.status(400).json({ error: "Nome e Email devem ser string" });
  }

  try {
    const data = await serviceUser.createUser(id, name, email);

    res.status(201).json({ data, message: "Usuário criado com sucesso" });
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json("Erro no servidor");
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (!id) {
    return res
      .status(400)
      .json({ error: "Id é obrigatório para completar a ação." });
  }

  try {
    const userDeleted = await serviceUser.deleteUser(id);

    if (!userDeleted) {
      return res.status(404).json({ error: "Usuário ão encontrado." });
    }

    return res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const {name, email} = req.body;

  const userData : usersModel = {
    id : id,
    name : name,
    email : email
  }

if (!id) {
    return res
      .status(400)
      .json({ error: "Id é obrigatório para completar a ação." });
  }

  try {
    const userUpdatedExist = await serviceUser.getUserById(id);

    if(!userUpdatedExist){
      return res.status(404).json({ error: "Usuário não encontrado para realizar a atualização."})
    }

    const userUpdated = await serviceUser.updateUser(id, userData);
    
    return res.status(200).json({message : "Usuário atualizado com sucesso!", userUpdated});
  } catch (error : any) {
    console.log(error.message);
    return res.status(500).json({ error: "Erro no servidor" });
  }


};
