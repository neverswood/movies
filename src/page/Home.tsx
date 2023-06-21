import { MovieCardList } from '../components/MovieCardList';
import { useEffect, useState } from 'react';
import '../styles/Home.scss';
import { getMovie } from '../services/Movies';
import { useDispatch } from 'react-redux';
import { updateMovie } from '../features/MovieSlice';
import { Movie } from '../services/models/MovieDataModel';
import SelectOption from '../components/SelectOption';

/** Home function to display the list of movies and filter them by categories */

export function Home() {
  const [data, setData] = useState<Movie[]>([]);
  const [option, setOption] = useState('');
  const dispatch = useDispatch();
  dispatch(updateMovie(data));

  useEffect(() => {
    getMovie().then((response) => setData(response));
  }, []);

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

  const filterMovieByCategory = data.filter((movie) =>
    movie.category.includes(option)
  );

  dispatch(updateMovie(filterMovieByCategory));

  return (
    <div>
      <SelectOption
        value={option}
        placeholder="filter"
        options={uniqueOptionsObject}
        onClick={(e) => {
          setOption(e.value);
        }}
      />
      <MovieCardList data={filterMovieByCategory} />
    </div>
  );
}
