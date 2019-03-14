import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import MoviesContainer from "./containers/MoviesContainer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">All Movies</Link>
          <Link to="/movies/byGenre">By Genre</Link>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <h1>Welcome to MovieApp</h1>;
            }}
          />
          <Route path="/movies" component={MoviesContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
