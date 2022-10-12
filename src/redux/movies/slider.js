import axios from 'axios';
import { playingMoviesUrl } from '../api/api';

// Actions
const FETCH_PLAYING_MOVIES = 'movies/playingMovies/FETCH_PLAYING_MOVIES';

// Initial State
const initialState = {
  playingMovies: [],
};

// Action Creation
export const fetchPlaying = (payload) => ({
  type: FETCH_PLAYING_MOVIES,
  payload,
});

// Fetch Popular Movies
export const fetchPlayingMovies = () => async (dispatch) => {
  const response = await axios.get(playingMoviesUrl);
  const data = await response.data;
  dispatch(fetchPlaying(data.results));
};

// Reducer
const playingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYING_MOVIES:
      return {
        ...state,
        playingMovies: action.payload,
      };
    default:
      return state;
  }
};

export default playingMoviesReducer;
