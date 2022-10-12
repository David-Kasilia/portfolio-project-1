import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import popularSeriesReducer from '../series/popularSeries';
import todaySeriesReducer from '../series/todaySeries';
import recommendedSeriesReducer from '../series/recommendationsSeries';
import playingMoviesReducer from '../movies/slider';
import upcomingMoviesReducer from '../movies/upcomingMovies';
import recommendedMoviesReducer from '../movies/recommendationMovies';
import popularMoviesReducer from '../movies/popularMovies';

const store = configureStore({
  reducer: {
    popular: popularSeriesReducer,
    today: todaySeriesReducer,
    recommendSeries: recommendedSeriesReducer,
    playing: playingMoviesReducer,
    upcoming: upcomingMoviesReducer,
    recommendMovie: recommendedMoviesReducer,
    popularMovie: popularMoviesReducer,
  },
  middleware: [thunk],
});

export default store;
