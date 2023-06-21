import { movies$ } from '../data/DataMovies';
import '../data/DataMovies.js';

/** Function to retrieve the movie data */

export const getMovie = async () => {
  const response = await movies$;
  return response;
};
