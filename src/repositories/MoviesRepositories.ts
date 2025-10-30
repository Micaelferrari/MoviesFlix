import { MoviesModel } from './../models/MoviesModel';

const dataBase: MoviesModel[] = [
  {
    id: 1,
    name: "Toy Story 3",
    description:
      "Woody, Buzz e seus amigos enfrentam novos desafios quando são doados para uma creche.",
  },
  {
    id: 2,
    name: "O Senhor dos Anéis: A Sociedade do Anel",
    description:
      "Um grupo improvável parte em uma jornada para destruir o Um Anel e derrotar Sauron.",
  },
  {
    id: 3,
    name: "Matrix",
    description:
      "Um hacker descobre a verdade sobre a realidade e luta contra máquinas que controlam a humanidade.",
  },
  {
    id: 4,
    name: "Vingadores: Ultimato",
    description:
      "Os heróis mais poderosos da Terra se unem para derrotar Thanos e restaurar o universo.",
  },
  {
    id: 5,
    name: "Jurassic Park",
    description:
      "Dinossauros clonados trazem caos em um parque temático futurista.",
  },
  {
    id: 6,
    name: "Interestelar",
    description:
      "Exploradores viajam por um buraco de minhoca em busca de um novo lar para a humanidade.",
  },
  {
    id: 7,
    name: "Batman: O Cavaleiro das Trevas",
    description: "Batman enfrenta o Coringa em uma luta pela alma de Gotham.",
  },
  {
    id: 8,
    name: "Procurando Nemo",
    description:
      "Um peixe-palhaço atravessa o oceano em busca de seu filho perdido.",
  },
];

export const findAllMovies = async (): Promise<MoviesModel[]> => {
  return dataBase;
};

export const findMovieById = async (
  id: number
): Promise<MoviesModel | undefined> => {
  return dataBase.find((movie) => movie.id === id);
};

export const creatMovie = async (name : string, description : string): Promise<MoviesModel | undefined> => {

  const id = dataBase.length +1;

  const newMovie : MoviesModel = {
    id, 
    name,
    description
  }

  dataBase.push(newMovie);
  return newMovie;
};

export const deleteOneMovie = async (id: number) => {
  const index = dataBase.findIndex((m) => m.id === id);

  if (index === -1) {
    false;
  }

  dataBase.splice(index, 1);

  return true;
};

export const updateOneMovie = async (id : number, body : MoviesModel) : Promise<MoviesModel> => {

  const movieIndex = dataBase.findIndex( movie => movie.id === id) 

  if(movieIndex !== -1){
        dataBase[movieIndex] = body;
        return dataBase[movieIndex];
  } else {
        throw new Error('Filme não encontrado');
  }
}