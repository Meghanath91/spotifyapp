export const SET_ALBUMS = "SET_ALBUMS";
export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    payload: albums,
  };
}
export const LOAD_MORE_ALBUMS = "LOAD_MORE_ALBUMS";
export function loadMoreAlbums(albums) {
  return {
    type: LOAD_MORE_ALBUMS,
    payload: albums,
  };
}
