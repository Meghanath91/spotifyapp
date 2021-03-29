export const SET_ARTISTS = "SET_ARTISTS";

export function setArtists(artists) {
  return {
    type: SET_ARTISTS,
    payload: artists
  }
}