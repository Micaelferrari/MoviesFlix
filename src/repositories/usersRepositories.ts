import { createMovie } from "./../controller/moviesController";
import { usersModel } from "./../models/usersModel";

const usersDataBase = [
  {
    id: 1,
    name: "Ana Silva",
    email: "ana.silva@gmail.com",
  },
  {
    id: 2,
    name: "Bruno Souza",
    email: "bruno.souza@gmail.com",
  },
  {
    id: 3,
    name: "Carla Mendes",
    email: "carlamendes123@gmail.com",
  },
  {
    id: 4,
    name: "Diego Oliveira",
    email: "d.oliveira87@gmail.com",
  },
  {
    id: 5,
    name: "Fernanda Costa",
    email: "fernandacosta@gmail.com",
  },
];

export const findAllUsers = async (): Promise<usersModel[]> => {
  return usersDataBase;
};

export const findUserById = async (
  id: number
): Promise<usersModel | undefined> => {
  return usersDataBase.find((user) => user.id === id);
};

export const createUser = async (user: usersModel) => {
  usersDataBase.push(user);

  return user;
};

export const deleteUSer = async (id : number) =>{
  const index = usersDataBase.findIndex((user) => user.id === id);

  if(index === -1){
    false
  }

  usersDataBase.splice(index, 1);

  return true;
}
