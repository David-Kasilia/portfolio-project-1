import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { fetchPopularSeriesList } from '../../redux/series/popularSeries';

const PopularSeries = () => {
  const { popularSeries } = useSelector((state) => state.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularSeriesList());
  }, []);

  console.log(popularSeries);

  const getPosterUrl = (posterPath) => (
    `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`
  );

  return (
    <div>
      {popularSeries.map((series) => (
        <div key={uuid()}>
          <h3>{series.name}</h3>
          <img src={getPosterUrl(series.poster_path)} alt="Series Poster" />
          <h4>{series.first_air_date}</h4>
        </div>
      ))}
    </div>
  );
};

export default PopularSeries;
