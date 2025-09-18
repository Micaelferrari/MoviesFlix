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
    const newUser : usersModel = {id, name, email};

    const createUser = usersRepositories.createUser(newUser);

    return createUser;
}