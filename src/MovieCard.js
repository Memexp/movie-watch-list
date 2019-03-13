import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    console.log(this.props.movie);
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="card-body">
            <p className="card-text">{this.props.movie.name}</p>
            <button
              className="btn btn-outline-secondary"
              onClick={() => this.props.watch(this.props.movie)}
            >
              {this.props.text}
            </button>
            {"  "}
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                this.props.deleteM(this.props.movie);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
