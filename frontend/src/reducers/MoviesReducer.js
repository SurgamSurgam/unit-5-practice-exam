import { RECEIVE_ALL_MOVIES } from "../actions/actionTypes";
// import merge from "lodash/merge";

const MoviesReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return action.movies;
    default:
      return oldState;
  }
};

export default MoviesReducer;
