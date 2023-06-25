import { MovieCardList } from '../components/MovieCardList';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovie } from '../features/MovieSlice';
import { Movie } from '../services/models/MovieDataModel';
import { State } from '../Store';
import SelectCategory from '../components/SelectCategory';

/**
 * Home function to display the list of movies and filter them by categories
 * @param {Movie[]} data - The data Movie
 */

export function Home({ data }: { data: Movie[] }) {
  const dispatch = useDispatch();

  const selectOptions = useSelector((state: State) => state.option.options);

  const FilterMovieByCategory = data.filter((movie: any) => {
    return selectOptions.includes(movie.category);
  });

  /* Send movies sort by category in redux */
  if (selectOptions.length === 0 || selectOptions === null) {
    dispatch(updateMovie(data));
  } else if (selectOptions.length >= 1) {
    dispatch(updateMovie(FilterMovieByCategory));
  }

  /* Category movie recovery */
  const options = data.map((movie) => {
    return movie.category;
  });

  /* Removal of duplicate movie categories */
  const uniqueOptions = Array.from(new Set(options));

  /* Creating an array of movie category objects with a label and a value */
  const uniqueOptionsObject = uniqueOptions.map((option) => {
    return { label: option, value: option };
  });

  return (
    <div>
      <SelectCategory option={uniqueOptionsObject} key={''} />
      <MovieCardList />
    </div>
  );
}
