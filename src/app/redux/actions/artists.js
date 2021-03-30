export const SET_ARTISTS = "SET_ARTISTS";
export const LOAD_MORE_ARTISTS = "LOAD_MORE_ARTISTS";
export const CLEAR_ARTISTS = "CLEAR_ARTISTS";
export const SET_ARTISTS_IN_PROGRESS = "SET_ARTISTS_IN_PROGRESS";

/**
 * @func setArtists
 * @param artists
 * @return {object}
 */
export function setArtists(artists) {
  return {
    type: SET_ARTISTS,
    payload: artists,
  };
}
/**
 * @func loadMoreArtists
 * @param artists
 * @return {object}
 */
export function loadMoreArtists(artists) {
  return {
    type: LOAD_MORE_ARTISTS,
    payload: artists,
  };
}

/**
 * @func clearArtists
 * @return {object}
 */
export function clearArtists() {
  return {
    type: SET_ARTISTS,
    payload: [],
  };
}

/**
 * @func loadMoreAlbums
 * @param artists
 * @return {object}
 */
export function setArtistsInProgress() {
  return {
    type: SET_ARTISTS_IN_PROGRESS,
  };
}
