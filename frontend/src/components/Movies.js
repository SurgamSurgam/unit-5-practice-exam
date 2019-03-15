import React from "react";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      searchedResults: ""
    };
  }

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
    let that = this;
    let filteredMovies = this.props.movies.filter(movie => {
      return movie.title
        .toLowerCase()
        .includes(that.state.searchQuery.toLowerCase());
    });
    debugger;
    let filteredMoviesMapped = filteredMovies.map((movie, i) => {
      return (
        <div className="filteredMoviesMappedDiv" key={i}>
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
    this.setState({
      searchedResults: filteredMoviesMapped,
      submittedSearch: true,
      searchQuery: ""
    });
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
        {this.state.submittedSearch ? this.state.searchedResults : moviesMapped}
      </div>
    );
  }
}

export default Movies;
