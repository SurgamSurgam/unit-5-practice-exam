import { RECEIVE_ALL_MOVIES } from "./actionTypes";
import axios from "axios";

export const receiveAllMovies = movies => {
  return { type: RECEIVE_ALL_MOVIES, movies };
};

export const getAllMovies = () => dispatch => {
  return axios.get("api/movies/").then(movies => {
    return dispatch(receiveAllMovies(movies.data.body));
  });
};
