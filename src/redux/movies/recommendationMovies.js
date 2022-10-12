import axios from 'axios';
import { recommendedMoviesUrl } from '../api/api';

// Actions
const FETCH_RECOMMENDED_MOVIES = 'movies/recommendationMovies/FETCH_RECOMMENDED_MOVIES';

// Initial State
const initialState = {
  recommendedMovies: [],
};

// Action Creation
export const fetchRecommended = (payload) => ({
  type: FETCH_RECOMMENDED_MOVIES,
  payload,
});

// Fetch Popular Movies
export const fetchRecommendedMovies = () => async (dispatch) => {
  const response = await axios.get(recommendedMoviesUrl);
  const data = await response.data;
  dispatch(fetchRecommended(data.results));
};

// Reducer
const recommendedMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMMENDED_MOVIES:
      return {
        ...state,
        recommendedMovies: action.payload,
      };
    default:
      return state;
  }
};

export default recommendedMoviesReducer;
