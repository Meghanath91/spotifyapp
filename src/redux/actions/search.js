export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export function setSearchQuery(searchQuery) {
  console.log(searchQuery, "in action=>")
  return {
    type: SET_SEARCH_QUERY,
    payload: searchQuery,
  };
}