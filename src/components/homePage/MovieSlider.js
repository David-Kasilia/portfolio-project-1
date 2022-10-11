/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchPlayingMovies } from '../../redux/movies/slider';

const MovieSlider = () => {
  const { playingMovies } = useSelector((state) => state.playing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlayingMovies());
  }, []);

  console.log(playingMovies);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const getPosterUrl = (posterPath) => (
    `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`
  );

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {playingMovies.map((series) => (
          <div key={uuid()} className="pm-details">
            <h3 className="pm-title">{series.original_title}</h3>
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
      </Slider>
    </div>
  );
};

export default MovieSlider;
