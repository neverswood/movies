import { MovieCard } from '../components/MovieCard';
import { MovieCardList } from '../components/MovieCardList';
import { movies$ } from '../data/DataMovies';
import { useEffect, useState } from 'react';
import '../styles/Home.scss';
import { getMovie } from '../services/Movies';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovie } from '../features/MovieSlice';
import FilterCategory from '../components/FilterCategory';
import { Movie } from '../services/models/MovieDataModel';
import { GroupBase } from 'react-select';
import { State } from '../Store';

export function Home() {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    getMovie().then((response) => setData(response));
  }, []);

  return (
    <div>
      <MovieCardList data={data} />
    </div>
  );
}
