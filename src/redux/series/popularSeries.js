import { createAsyncThunk } from '@reduxjs/toolkit';
import { popularSeriesUrl } from '../api/api';

// Actions
const FETCH_POPULAR_SERIES = 'series/popularSeries/FETCH_POPULAR_SERIES';

// Initial State
const initialState = {
  popularSeries: [],
};

// Fetch Popular Series List Function
export const fetchPopularSeries = createAsyncThunk(
  FETCH_POPULAR_SERIES,
  async (args, { dispatch }) => {
    const response = await fetch(popularSeriesUrl);
    const data = await response.json();
    const popularSeries = Object.keys(data).map((key) => {
      const popular = data[key];
      return {
        id: key,
        ...popular,
      };
    });
    dispatch({
      type: FETCH_POPULAR_SERIES,
      payload: popularSeries,
    });
    return popularSeries;
  },
);

const popularSeriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_SERIES:
      return {
        ...state,
        popularSeries: action.payload,
      };
    default:
      return state;
  }
};

export default popularSeriesReducer;
