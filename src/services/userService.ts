import { usersModel } from "./../models/usersModel";
import * as usersRepositories from "../repositories/usersRepositories";

export const getAllUsers = async () => {
  try {
    const users = await usersRepositories.findAllUsers();

    if (!users || users.length === 0) {
      throw new Error("Nenhum usuário encontrado.");
    }
    return users;
  } catch (error: any) {
    throw new Error(error.message || "Erro ao buscar usuários.");
  }
};

export const getUserById = async (id: number) => {
  try {
    const user = await usersRepositories.findUserById(id);

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    return user;
  } catch (error: any) {
    throw new Error(error.message || "Erro ao buscar usuário.");
  }
};

export const createUser = async ( name: string, email: string) => {
  try {
    const userEmailExist = await usersRepositories.findUserByEmail(email);


    if (userEmailExist) {
      throw new Error("Email já cadastrado.");
    }

    const createdUser = await usersRepositories.createUser(name, email);

    return createdUser;
  } catch (error: any) {
    throw new Error(error.message || "Erro ao criar usuário.");
  }
};

export const deleteUser = async (id: number) => {
  try {
    const deletedUser = await usersRepositories.deleteOneUser(id);
    if (!deletedUser) {
      throw new Error("Usuário não encontrado para exclusão.");
    }
    return deletedUser;
  } catch (error: any) {
    throw new Error(error.message || "Erro ao deletar usuário.");
  }
};

export const updateUser = async (id: number, body: usersModel) => {

    try {
        const verifyExistUser = await usersRepositories.findUserById(id);
      
        if (!verifyExistUser) {
          throw new Error("Usuário não encontrado");
        }
      
        const userToUpdate: usersModel = {
          ...verifyExistUser,
          ...body,
        };
        const updatedUser = await usersRepositories.updateUser(id, userToUpdate);
      
        if (!updatedUser) {
          throw new Error("Erro ao atualizar o usuário");
        }
        return updatedUser;
        
    } catch (error: any) {
    throw new Error(error.message || "Erro ao buscar usuário.");
  }
};
