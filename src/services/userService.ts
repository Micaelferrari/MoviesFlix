import { usersModel } from './../models/usersModel';
import * as usersRepositories from '../repositories/usersRepositories'


export const getAllUsers = async () =>{
    try{
    const users = await usersRepositories.findAllUsers()

    if(!users || users.length === 0){
        throw new Error("Nenhum usuário encontrado.")
    }
    return users;
    }catch(error :any){
        throw new Error( error.message || "Erro ao buscar usuários.");
    }
}

export const getUserById = async (id : number)=>{
    try{
    const user = await usersRepositories.findUserById(id);

    if(!user){
        throw new Error("Usuário não encontrado.")
    }

    return user;
    } catch (error : any){
        throw new Error( error.message || "Erro ao buscar usuário.")
    }
}

export const createUser = async (id : number, name : string, email : string) =>{
    try {
    
    const userIdExist = await usersRepositories.findUserById(id);
    //const userEmailExist = await usersRepositories.findUserByEmail(email); // implemetar função para buscar pelo email.

    if(userIdExist){
        throw new Error("Usuário já existente.")
    }

    /* if(userEmailExist){
        throw new Error("Email já cadastrado.")
    } */

    const newUser : usersModel = {id, name, email};

    const createdUser = await usersRepositories.createUser(newUser);

    return createdUser;
        
    } catch (error : any) {
         throw new Error( error.message || "Erro ao criar usuário.")
    }
}

export const deleteUser = async (id: number) =>{
    const deleteuser = await usersRepositories.deleteOneUSer(id);

    return deleteuser;
}

export const updateUser = async (id : number, body : usersModel) =>{
    
    const verifyExistUser = await usersRepositories.findUserById(id);

    if(!verifyExistUser){
        throw new Error("Usuário não encontrado");
    }

    const userToUpdate: usersModel = {
    ...verifyExistUser,
    ...body
};
    const updateUser = await usersRepositories.updateUser(id, userToUpdate);

    if(!updateUser){
        throw new Error("Erro ao atualizar o usuário")
    }
    return updateUser;
}