import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import popularSeriesReducer from '../series/popularSeries';
import todaySeriesReducer from '../series/todaySeries';
import recommendedSeriesReducer from '../series/recommendationsSeries';

const store = configureStore({
  reducer: {
    popular: popularSeriesReducer,
    today: todaySeriesReducer,
    recommendSeries: recommendedSeriesReducer,
  },
  middleware: [thunk],
});

export default store;
