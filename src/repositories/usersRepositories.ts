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
