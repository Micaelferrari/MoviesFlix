import { MoviesModel } from "./../models/MoviesModel";
import * as MoviesRepositories from "./../repositories/MoviesRepositories";

export const getAllMoviesServices = async () => {
  const data = await MoviesRepositories.findAllMovies();
  return data;
};

export const getMovieByIdServices = async (id: number) => {
  //pedir para o repositório
  const data = MoviesRepositories.findMovieById(id);

  return data;
};

export const createMovieServices = async (
  id: number,
  name: string,
  description: string
) => {
  //implementar validações

  const newMovie: MoviesModel = { id, name, description };

  const creatMovie = MoviesRepositories.creatMovie(newMovie);

  return creatMovie;
};

export const deleteMovie = async (id : number) =>{

 const deleted = await MoviesRepositories.deleteOneMovie(id);

 return deleted
}
