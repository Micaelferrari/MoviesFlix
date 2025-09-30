import { updateMovie } from './../controller/moviesController';
import { MoviesModel } from "./../models/MoviesModel";
import * as MoviesRepositories from "./../repositories/MoviesRepositories";

export const getAllMoviesService = async () => {
  const data = await MoviesRepositories.findAllMovies();
  return data;
};

export const getMovieByIdService = async (id: number) => {
  //pedir para o repositório
  const data = MoviesRepositories.findMovieById(id);

  return data;
};

export const createMovieService = async (
  id: number,
  name: string,
  description: string
) => {
  //implementar validações

  const newMovie: MoviesModel = { id, name, description };

  const creatMovie = MoviesRepositories.creatMovie(newMovie);

  return creatMovie;
};

export const deleteMovieService = async (id : number) =>{
//implementar validações
 const deleted = await MoviesRepositories.deleteOneMovie(id);

 return deleted
}

export const updateMovieService = async (id : number, body : MoviesModel)  =>{
  //implementar validações 
   const upMovies = await MoviesRepositories.updateOneMovie(id, body);

return upMovies;
}
