import * as actionType from "../actions/actionTypes";
const initialState = {
  copyMe: "Remember to copy me!",
  watchList: [],
  watched: [],
  filterW: [],
  filterUW: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.UNWATCHED:
      return {
        ...state,
        watchList: state.watchList.concat(action.payload),
        watched: state.watched.filter(movie => movie !== action.payload),
        filterUW: state.watchList.concat(action.payload),
        filterW: state.watched.filter(movie => movie !== action.payload)
      };
    case actionType.WATCHED:
      return {
        ...state,
        watched: state.watched.concat(action.payload),
        watchList: state.watchList.filter(movie => movie !== action.payload),
        filterW: state.watched.concat(action.payload),
        filterUW: state.watchList.filter(movie => movie !== action.payload)
      };

    case actionType.ADD_MOVIE:
      return {
        ...state,
        watchList: state.watchList.concat(action.payload),
        filterUW: state.watchList.concat(action.payload)
      };
    case actionType.DELETE_MOVIE:
      return {
        ...state,
        watchList: state.watchList.filter(movie => movie !== action.payload),
        watched: state.watched.filter(movie => movie !== action.payload),
        filterW: state.watched.filter(movie => movie !== action.payload),
        filterUW: state.watchList.filter(movie => movie !== action.payload)
      };

    case actionType.FILTER_WATCHED_MOVIES:
      return {
        ...state,
        filterW: state.watched.filter(movie => {
          return `${movie.name}`.toLowerCase().includes(action.payload);
        })
      };
    case actionType.FILTER_UNWATCHED_MOVIES:
      return {
        ...state,
        filterUW: state.watchList.filter(movie => {
          return `${movie.name}`.toLowerCase().includes(action.payload);
        })
      };
    default:
      return state;
  }
};

export default reducer;
