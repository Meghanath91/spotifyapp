export const LOAD_MORE_ARTISTS = 'LOAD_MORE_ARTISTS';
export function loadMoreArtists(artists) {
  return {
    type: LOAD_MORE_ARTISTS,
    payload: artists,
  };
}