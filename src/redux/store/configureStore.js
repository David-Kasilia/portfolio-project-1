import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import popularSeriesReducer from '../series/popularSeries';
import todaySeriesReducer from '../series/todaySeries';

const store = configureStore({
  reducer: {
    popular: popularSeriesReducer,
    today: todaySeriesReducer,
  },
  middleware: [thunk],
});

export default store;
