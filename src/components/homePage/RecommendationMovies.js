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
    <div className="pm-container">
      {recommendedMovies.map((series) => (
        <div key={uuid()} className="pm-details">
          <h3 className="pm-title">{series.name}</h3>
          <img src={getPosterUrl(series.poster_path)} alt="Series Poster" className="pm-image" />
          <h3 className="pm-date">
            Release Date:
            <br />
            {series.release_date}
          </h3>
          <h3 className="pm-movie">Movie Overview:</h3>
          <h4 className="pm-overview">{series.overview}</h4>
          <h4 className="pm-vote">
            Vote Average:
            <br />
            {series.vote_average}
          </h4>

        </div>
      ))}
    </div>
  );
};

export default RecommendationMovies;
