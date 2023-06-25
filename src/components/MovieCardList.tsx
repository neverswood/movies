import { Movie } from '../services/models/MovieDataModel';
import { MovieCard } from './MovieCard';
import '../styles/MovieCardList.scss';
import { useEffect, useState } from 'react';
import { Pagination, ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import { State } from '../Store';

/**
 * Function that displays the list of movies and the pagination
 */

export function MovieCardList() {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [postPerPage, setPostPerPage] = useState(12);

  const dataMovieRedux = useSelector((state: State) => state.movie.data);
  useEffect(() => {
    setTotal(dataMovieRedux.length);
  });

  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = dataMovieRedux.slice(indexOfFirstPage, indexOfLastPage);

  const onShowSizeChange = (current: any, pageSize: any) => {
    setPostPerPage(pageSize);
  };

  return (
    <section className="movie-card-list">
      <div className="movie-card-list__item">
        {currentPosts.map((movie) => {
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
      </div>
      <div className="movie-card-list__pagination">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#00b96b',
            },
          }}
        />
        <Pagination
          onChange={(value) => setPage(value)}
          pageSizeOptions={[4, 8, 12]}
          pageSize={postPerPage}
          total={total}
          current={page}
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          className="pagination"
          locale={{ items_per_page: 'par page' }}
        />
      </div>
    </section>
  );
}
