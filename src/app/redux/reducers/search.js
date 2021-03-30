import { SET_SEARCH_QUERY } from "../actions/search";
import { searchQuery } from "../states";
/**
 * @func searchReducer
 * @param state 
 * @param action 
 * @return {String}
 */
export let searchReducer = (state = searchQuery, action) => {
  let newSearchQuery;
  switch (action.type) {
    case SET_SEARCH_QUERY:
      newSearchQuery = ''
      newSearchQuery = action.payload;
      return newSearchQuery;

    default:
  }
  return state;
};
