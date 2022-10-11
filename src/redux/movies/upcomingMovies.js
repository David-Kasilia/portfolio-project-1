import axios from 'axios';
import { upcomingMoviesUrl } from '../api/api';

// Actions
const FETCH_UPCOMING_MOVIES = 'movies/upcomingMovies/FETCH_UPCOMING_MOVIES';

// Initial State
const initialState = {
  upcomingMovies: [],
};

// Action Creation
export const fetchUpcoming = (payload) => ({
  type: FETCH_UPCOMING_MOVIES,
  payload,
});

// Fetch Popular Movies
export const fetchUpcomingMovies = () => async (dispatch) => {
  const response = await axios.get(upcomingMoviesUrl);
  const data = await response.data;
  dispatch(fetchUpcoming(data.results));
};

// Reducer
const upcomingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload,
      };
    default:
      return state;
  }
};

export default upcomingMoviesReducer;
