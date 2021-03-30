export const SET_ALBUMS = "SET_ALBUMS";
export const LOAD_MORE_ALBUMS = "LOAD_MORE_ALBUMS";
/**
 * @func setAlbums
 * @param albums
 * @return {object}
 */
export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    payload: albums,
  };
}
/**
 * @func loadMoreAlbums
 * @param albums
 * @return {object}
 */
export function loadMoreAlbums(albums) {
  return {
    type: LOAD_MORE_ALBUMS,
    payload: albums,
  };
}
