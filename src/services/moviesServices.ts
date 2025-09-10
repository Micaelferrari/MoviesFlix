import { findAllMovies } from './../repositories/MoviesRepositories';

export const getMoviesServices = async () => {
  const data = await findAllMovies()
  return data;
};
