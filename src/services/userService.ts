import { usersModel } from './../models/usersModel';
import * as usersRepositories from '../repositories/usersRepositories'


export const getAllUsers = async () =>{
    const data = await usersRepositories.findAllUsers()
    return data;
}

export const getUserById = async (id : number)=>{
    const data = await usersRepositories.findUserById(id);
    return data;
}

export const createUser = async (id : number, name : string, email : string) =>{
    //preciso implementar validações
    const newUser : usersModel = {id, name, email};

    const createUser = await usersRepositories.createUser(newUser);

    return createUser;
}

export const deleteUser = async (id: number) =>{
    const deleteuser = await usersRepositories.deleteOneUSer(id);

    return deleteuser;
}

export const updateUser = async (id : number, body : usersModel) =>{

    const updateUser = await usersRepositories.updateUser(id, body);

    return updateUser;
}