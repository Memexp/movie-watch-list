import * as actionType from "./actionTypes";

export const unwatchedMovies = movie => {
  return {
    type: actionType.UNWATCHED,
    payload: movie
  };
};

export const watchedMovies = movie => {
  return {
    type: actionType.WATCHED,
    payload: movie
  };
};

export const addMovie = newMovie => {
  return {
    type: actionType.ADD_MOVIE,
    payload: newMovie
  };
};

export const deleteMovie = movie => {
  return {
    type: actionType.DELETE_MOVIE,
    payload: movie
  };
};

export const filterWatchedMovies = query => {
  return {
    type: actionType.FILTER_WATCHED_MOVIES,
    payload: query
  };
};

export const filterUNwatchedMovies = query => {
  return {
    type: actionType.FILTER_UNWATCHED_MOVIES,
    payload: query
  };
};
