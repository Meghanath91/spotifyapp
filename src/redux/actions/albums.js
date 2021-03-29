export const SET_ALBUMS = "SET_ALBUMS";
export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    payload: albums,
  };
}
