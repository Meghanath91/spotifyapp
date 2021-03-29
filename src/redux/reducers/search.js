import { SET_SEARCH_QUERY } from "../actions/search";
import { searchQuery } from "../states";
export let searchReducer = (state = searchQuery, action) => {
  let newSearchQuery;

  switch (action.type) {
    case SET_SEARCH_QUERY:
      console.log("in reducer", action.payload)
      newSearchQuery = ''
      newSearchQuery = action.payload;
      return newSearchQuery;

    default:
  }
  return state;
};
