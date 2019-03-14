import { combineReducers } from "redux";
import MoviesReducer from "./MoviesReducer.js";

export const RootReducer = combineReducers({
  movies: MoviesReducer
});
