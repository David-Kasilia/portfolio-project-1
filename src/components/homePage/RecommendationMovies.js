import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { fetchRecommendedMovies } from '../../redux/movies/recommendationMovies';

const RecommendationMovies = () => {
  const { recommendedMovies } = useSelector((state) => state.recommendMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendedMovies());
  }, []);

  console.log(recommendedMovies);

  const getPosterUrl = (posterPath) => (
    `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`
  );

  return (
    <div>
      {recommendedMovies.map((series) => (
        <div key={uuid()}>
          <h3>{series.name}</h3>
          <img src={getPosterUrl(series.poster_path)} alt="Series Poster" />

        </div>
      ))}
    </div>
  );
};

export default RecommendationMovies;
