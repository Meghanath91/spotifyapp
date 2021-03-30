export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
/**
 * @func setSearchQuery
 * @param searchQuery
 * @return {object}
 */
export function setSearchQuery(searchQuery) {
  return {
    type: SET_SEARCH_QUERY,
    payload: searchQuery,
  };
}

