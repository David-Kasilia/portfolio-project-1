import axios from 'axios';
import { popularMoviesUrl } from '../api/api';

// Actions
const FETCH_POPULAR_MOVIES = 'movies/popularMovies/FETCH_POPULAR_MOVIES';

// Initial State
const initialState = {
  popularMovies: [],
};

// Action Creation
export const fetchPopular = (payload) => ({
  type: FETCH_POPULAR_MOVIES,
  payload,
});

// Fetch Popular Movies
export const fetchPopularMovies = () => async (dispatch) => {
  const response = await axios.get(popularMoviesUrl);
  const data = await response.data;
  dispatch(fetchPopular(data.results));
};

// Reducer
const popularMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    default:
      return state;
  }
};

export default popularMoviesReducer;
