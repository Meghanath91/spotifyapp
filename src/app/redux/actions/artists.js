export const SET_ARTISTS = "SET_ARTISTS";
export function setArtists(artists) {
  return {
    type: SET_ARTISTS,
    payload: artists,
  };
}
export const LOAD_MORE_ARTISTS = 'LOAD_MORE_ARTISTS';
export function loadMoreArtists(artists) {
  return {
    type: LOAD_MORE_ARTISTS,
    payload: artists,
  };
}