import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { fetchRecommendedSeries } from '../../redux/series/recommendationsSeries';

const RecommendationSeries = () => {
  const { recommendedSeries } = useSelector((state) => state.recommendSeries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendedSeries());
  }, []);

  console.log(recommendedSeries);

  const getPosterUrl = (posterPath) => (
    `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`
  );

  return (
    <div>
      {recommendedSeries.map((series) => (
        <div key={uuid()}>
          <h3>{series.name}</h3>
          <img src={getPosterUrl(series.poster_path)} alt="Series Poster" />
        </div>
      ))}
    </div>
  );
};

export default RecommendationSeries;
