import React from 'react';
import '../App.css';
import PopularSeries from './homePage/PopularSeries';
import TodaySeries from './homePage/TodaySeries';
import RecommendationSeries from './homePage/RecommendationSeries';
import PopularMovies from './homePage/PopularMovies';
import RecommendationMovies from './homePage/RecommendationMovies';
import UpcomingMovies from './homePage/UpcomingMovies';
import MovieSlider from './homePage/MovieSlider';

const HomePage = () => (
  <div>
    <h2 className="now">
      Welcome To The Movie Mania
      <br />
      Here are the Movies That Are Currently Playing In Theatre
    </h2>
    <MovieSlider />
    <h2 className="now">Series On Air Today</h2>
    <TodaySeries />
    <h2 className="now">Upcoming Movies</h2>
    <UpcomingMovies />
    <h2 className="now">Most Popular Movies</h2>
    <PopularMovies />
    <h2 className="now">Most Popular Series</h2>
    <PopularSeries />
    <h2 className="now"> Here Is A list Of Recommended Series</h2>
    <RecommendationSeries />
    <h2 className="now">Heres is A List Of Recommended Movies</h2>
    <RecommendationMovies />
  </div>

);

export default HomePage;
