import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieAdd from "./MovieAdd";
import MovieList from "./MovieList";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

class App extends Component {
  watched_text = "Watched";
  unwatched_text = "Unwatched";

  render() {
    return (
      <div className="container">
        <header className="text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <h3 className="title">Hello, this is my new web app</h3>
        </header>
        <br />
        <MovieAdd />
        <br />
        <h3>
          Watchlist{" "}
          <button disabled className="count">
            {this.props.FUNWatched.length}
          </button>
        </h3>{" "}
        <MovieList
          watch={this.props.onWatchedMovie}
          deleteM={this.props.onDeleteMovie}
          movies={this.props.FUNWatched}
          text={this.watched_text}
          search={this.props.onUNwatchedSearch}
        />
        <h3>
          Watched{" "}
          <button disabled className="count">
            {this.props.FWatched.length}
          </button>
        </h3>
        <MovieList
          watch={this.props.onunwatchedMovie}
          deleteM={this.props.onDeleteMovie}
          movies={this.props.FWatched}
          text={this.unwatched_text}
          search={this.props.onWatchedSearch}
        />
        <br />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    watch: state.watchList,
    watched: state.watched,
    FWatched: state.filterW,
    FUNWatched: state.filterUW
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddMovie: newMovie => dispatch(actionCreators.addMovie(newMovie)),
    onWatchedMovie: movie => dispatch(actionCreators.watchedMovies(movie)),
    onunwatchedMovie: movie => dispatch(actionCreators.unwatchedMovies(movie)),
    onDeleteMovie: movie => dispatch(actionCreators.deleteMovie(movie)),
    onWatchedSearch: query =>
      dispatch(actionCreators.filterWatchedMovies(query)),
    onUNwatchedSearch: query =>
      dispatch(actionCreators.filterUNwatchedMovies(query))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
