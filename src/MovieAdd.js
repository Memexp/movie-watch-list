import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

class MovieAdd extends Component {
  state = {
    name: ""
  };

  handleChange = () => {
    let movie = {
      name: this.state.name
    };
    return this.props.onAddMovie(movie);
  };
  render() {
    return (
      <div>
        <div>Add A Movie</div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="movie name"
            aria-label="movie name"
            onChange={event => this.setState({ name: event.target.value })}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={this.handleChange}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddMovie: newMovie => dispatch(actionCreators.addMovie(newMovie))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(MovieAdd);
