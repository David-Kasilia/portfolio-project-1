import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularSeries } from '../../redux/series/popularSeries';

const PopularSeries = () => {
  const { popularSeries } = useSelector((state) => state.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularSeries());
  }, []);

  //   console.log(popularSeries[1]);

  const seriesObj = popularSeries[1];
  console.log(seriesObj);

  const getPosterUrl = (posterPath) => (
    `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`
  );

  return (
    <div>
      {Object.values(seriesObj).map((series) => (
        <div key={series.id}>
          <h3>{series.name}</h3>
          <img src={getPosterUrl(series.poster_path)} alt="Series Poster" />

        </div>
      ))}
    </div>
  );
};

export default PopularSeries;
