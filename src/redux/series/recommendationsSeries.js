import axios from 'axios';
import { recommendedShowsUrl } from '../api/api';

// Action
const FETCH_RECOMMENDED_SERIES = 'series/recommendationSeries/FETCH_RECOMMENDED_SERIES';

// Initial State
const initialState = {
  recommendedSeries: [],
};

// Action Creators
export const fetchRecommended = (payload) => ({
  type: FETCH_RECOMMENDED_SERIES,
  payload,
});

// Fetch Recommended series list
export const fetchRecommendedSeries = () => async (dispatch) => {
  const recommendations = await axios.get(recommendedShowsUrl);
  const data = await recommendations.data;
  dispatch(fetchRecommended(data.results));
};

// Reducer
const recommendedSeriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMMENDED_SERIES:
      return {
        ...state,
        recommendedSeries: action.payload,
      };
    default:
      return state;
  }
};

export default recommendedSeriesReducer;
