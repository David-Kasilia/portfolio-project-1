import React from 'react';
import PopularSeries from './homePage/PopularSeries';
import TodaySeries from './homePage/TodaySeries';

const HomePage = () => (
  <div>
    <h1>Welcome To The Movie Hub</h1>
    <h2>Series On Air Today</h2>
    <TodaySeries />
    <h2>Most Popular Series</h2>
    <PopularSeries />
  </div>

);

export default HomePage;
