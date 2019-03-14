import Movies from "../components/Movies.js";
import { connect } from "react-redux";
import { getAllMovies } from "../actions/MoviesActions.js";

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return { getAllMovies: () => dispatch(getAllMovies()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
