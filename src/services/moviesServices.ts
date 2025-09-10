import { findAllMovies } from './../repositories/MoviesRepositories';

export const getAllMoviesServices = async () => {
  const data = await findAllMovies()
  return data;
};
