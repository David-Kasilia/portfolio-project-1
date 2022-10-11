import React from 'react';
import PopularSeries from './homePage/PopularSeries';
import TodaySeries from './homePage/TodaySeries';
import RecommendationSeries from './homePage/RecommendationSeries';
import PopularMovies from './homePage/PopularMovies';
import RecommendationMovies from './homePage/RecommendationMovies';
import UpcomingMovies from './homePage/UpcomingMovies';

const HomePage = () => (
  <div>
    <h1>Welcome To The Movie Hub</h1>
    <h2>Upcoming Movies</h2>
    <UpcomingMovies />
    <h2>Series On Air Today</h2>
    <TodaySeries />
    <h2>Most Popular Movies</h2>
    <PopularMovies />
    <h2>Most Popular Series</h2>
    <PopularSeries />
    <h2> Here Is A list Of Recommended Series</h2>
    <RecommendationSeries />
    <h2>Heres is A List Of Recommended Movies</h2>
    <RecommendationMovies />
  </div>

);

export default HomePage;
