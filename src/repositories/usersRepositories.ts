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

export const findUserByEmail= async (
  email : string
): Promise<usersModel | undefined> => {
  return usersDataBase.find((user) => user.email === email );
};

export const createUser = async (name : string, email : string): Promise<usersModel> => {

  const id = usersDataBase.length +1;

  const newUser : usersModel = {
    id,
    name,
    email
  }
  usersDataBase.push(newUser);

  return newUser;
};

export const deleteOneUser = async (id : number) =>{
  const index = usersDataBase.findIndex((user) => user.id === id);

  if(index === -1){
    return false;
  }

  const deletedUser = usersDataBase[index];
  usersDataBase.splice(index, 1);

  return deletedUser;
}

export const updateUser = async (id: number, body : usersModel): Promise<usersModel | null > =>{
  
  const userIndex = usersDataBase.findIndex( (user)=> user.id === id);

  if(userIndex !== -1){

    usersDataBase[userIndex] = {...usersDataBase[userIndex], ...body};
    return usersDataBase[userIndex];

  }else{
    return null;
  }
}
