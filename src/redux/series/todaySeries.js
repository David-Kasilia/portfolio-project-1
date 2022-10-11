import axios from 'axios';
import { todaySeriesListUrl } from '../api/api';

// Actions
const FETCH_TODAY_SERIES = 'series/popularSeries/FETCH_TODAY_SERIES';

// Initial State
const initialState = {
  todaySeries: [],
};

// Actions
export const fetchToday = (payload) => ({
  type: FETCH_TODAY_SERIES,
  payload,
});

// Fetch Todays Series From Api
export const fetchTodaySeries = () => async (dispatch) => {
  const todaySeriesData = await axios.get(todaySeriesListUrl);
  const data = await todaySeriesData.data;
  dispatch(fetchToday(data.results));
};

const todaySeriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODAY_SERIES:
      return {
        ...state,
        todaySeries: action.payload,
      };
    default:
      return state;
  }
};

export default todaySeriesReducer;
