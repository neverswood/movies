import { Movie } from '../services/models/MovieDataModel';
import { MovieCard } from './MovieCard';
import '../styles/MovieCardList.scss';

/**
 * Function that displays the list of movies
 * @param {Movie[]} data - The movie data
 * @returns {MovieCardList}
 */

export function MovieCardList({ data }: { data: Movie[] }) {
  return (
    <section className="movie-card-list">
      {data.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            category={movie.category}
            likes={movie.likes}
            dislikes={movie.dislikes}
          />
        );
      })}
    </section>
  );
}
