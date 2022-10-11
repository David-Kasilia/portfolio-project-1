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
    <div className="pm-container">
      {todaySeries.map((series) => (
        <div key={uuid()} className="pm-details">
          <h3 className="pm-title">{series.name}</h3>
          <img src={getPosterUrl(series.poster_path)} alt="Series Poster" className="pm-image" />
          <h3 className="pm-date">
            First Air Date:
            <br />
            {series.first_air_date}
          </h3>
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

export default TodaySeries;
