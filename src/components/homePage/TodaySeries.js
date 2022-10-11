import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { fetchTodaySeries } from '../../redux/series/todaySeries';

const TodaySeries = () => {
  const { todaySeries } = useSelector((state) => state.today);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodaySeries());
  }, []);

  console.log(todaySeries);

  const getPosterUrl = (posterPath) => (
    `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`
  );

  return (
    <div>
      {todaySeries.map((series) => (
        <div key={uuid()}>
          <h3>{series.name}</h3>
          <img src={getPosterUrl(series.poster_path)} alt="Series Poster" />
        </div>
      ))}
    </div>
  );
};

export default TodaySeries;
