import * as usersRepositories from '../repositories/usersRepositories'

export const getAllUsers = async () =>{
    const data = await usersRepositories.findAllUsers()
    return data;
}

export const getUserById = async (id : number)=>{
    const data = await usersRepositories.findUserById(id);
    return data;
}