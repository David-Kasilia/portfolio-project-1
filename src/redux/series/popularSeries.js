import axios from 'axios';
import { popularSeriesUrl } from '../api/api';

// Actions
const FETCH_POPULAR_SERIES = 'series/popularSeries/FETCH_POPULAR_SERIES';

// Initial State
const initialState = {
  popularSeries: [],
};

// Actions
export const fetchPopularSeries = (payload) => ({
  type: FETCH_POPULAR_SERIES,
  payload,
});

export const fetchPopularSeriesList = () => async (dispatch) => {
  const popularSeriesData = await axios.get(popularSeriesUrl);
  const data = await popularSeriesData.data;
  dispatch(fetchPopularSeries(data.results));
};

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
