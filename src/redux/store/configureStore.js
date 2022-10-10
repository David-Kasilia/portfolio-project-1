import { configureStore } from '@reduxjs/toolkit';
import popularSeriesReducer from '../series/popularSeries';

const store = configureStore({
  reducer: {
    popular: popularSeriesReducer,
  },
});

export default store;
