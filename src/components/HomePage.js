import React from 'react';
import PopularSeries from './homePage/PopularSeries';
import TodaySeries from './homePage/TodaySeries';
import RecommendationSeries from './homePage/RecommendationSeries';

const HomePage = () => (
  <div>
    <h1>Welcome To The Movie Hub</h1>
    <h2>Series On Air Today</h2>
    <TodaySeries />
    <h2>Most Popular Series</h2>
    <PopularSeries />
    <h2> Here Is A list Of Recommended Series</h2>
    <RecommendationSeries />
  </div>

);

export default HomePage;
