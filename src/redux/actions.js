export const SET_ARTISTS = "SET_ARTISTS";

export function setArtists(artists) {
  console.log(artists, "in action")
  return {
    type: SET_ARTISTS,
    payload: artists
  }
}