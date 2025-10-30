import { MoviesModel } from "./../models/MoviesModel";
import * as MoviesRepositories from "./../repositories/MoviesRepositories";

export const getAllMoviesService = async () => {
  try {

    const movies = await MoviesRepositories.findAllMovies();
  
    if(!movies|| movies.length === 0){
      throw new Error("Nenhum filme encontrado.");
    }
    return movies;

  } catch (error : any) {
    throw new Error(error.message || "Erro ao buscar usuários.");
  }
};

export const getMovieByIdService = async (id: number) => {
try {
  
  const data = MoviesRepositories.findMovieById(id);

  if(!data){
    throw new Error("Filme não encontrado.");
  }

  return data;
} catch (error : any) {
  throw new Error(error.message || "Erro ao filme usuário.");
}
};

export const createMovieService = async (
  name: string,
  description: string
) => {
  //implementar validações


  const creatMovie = MoviesRepositories.creatMovie(name, description);

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
