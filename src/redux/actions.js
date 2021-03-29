export const SET_ARTISTS = "SET_ARTISTS";
export const SET_ALBUMS = "SET_ALBUMS";
export function setArtists(artists) {
  return {
    type: SET_ARTISTS,
    payload: artists,
  };
}
export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    payload: albums,
  };
}
