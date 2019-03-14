import React from "react";

class Movies extends React.Component {
  state = { searchQuery: "", submittedSearch: false, searchedResults: [] };

  componentDidMount() {
    this.props.getAllMovies();
  }

  handleChange = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    console.log(this.state);
    let moviesMapped = this.props.movies.map(movie => {
      return (
        <div className="moviesMappedDiv">
          <h1>Title: {movie.title}</h1>
          <h3>
            Rating:{" "}
            {movie.rating_average
              ? movie.rating_average
              : "No rating available"}
          </h3>
          <img src={movie.img_url} alt="" />
        </div>
      );
    });

    return (
      <div className="moviesWrapper">
        <form className="searchMovieFormDiv" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button type="submit">Search By Title</button>
        </form>
        {moviesMapped}
      </div>
    );
  }
}

export default Movies;
