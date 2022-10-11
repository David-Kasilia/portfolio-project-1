import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { fetchPopularMovies } from '../../redux/movies/popularMovies';

const PopularMovies = () => {
  const { popularMovies } = useSelector((state) => state.popularMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  console.log(popularMovies);

  const getPosterUrl = (posterPath) => (
    `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`
  );

  return (
    <div>
      {popularMovies.map((series) => (
        <div key={uuid()}>
          <h3>{series.name}</h3>
          <img src={getPosterUrl(series.poster_path)} alt="Series Poster" />

        </div>
      ))}
    </div>
  );
};

export default PopularMovies;
