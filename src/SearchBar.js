import React, { Component } from "react";

class SearchBar extends Component {
  handleChange = event => {
    this.props.search(event.target.value);
  };

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fas fa-search" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
