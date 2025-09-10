import * as  MoviesRepositories  from './../repositories/MoviesRepositories';

export const getAllMoviesServices = async () => {
  const data = await MoviesRepositories.findAllMovies()
  return data;
};

export const getMovieByIdServices = async (id : number) => {
  //pedir para o repositório
const data = MoviesRepositories.findMovieById(id)

return data;
}
