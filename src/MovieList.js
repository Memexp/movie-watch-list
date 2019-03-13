import React, { Component } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

class MovieList extends Component {
  render() {
    const movieCards = this.props.movies.map(movie => (
      <MovieCard
        watch={this.props.watch}
        deleteM={this.props.deleteM}
        key={movie.name}
        movie={movie}
        text={this.props.text}
      />
    ));

    return (
      <div>
        <SearchBar search={this.props.search} />
        <div className="row">{movieCards}</div>
      </div>
    );
  }
}
export default MovieList;
