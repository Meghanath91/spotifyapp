import { SET_ARTISTS, LOAD_MORE_ARTISTS, CLEAR_ARTISTS } from "../actions/artists";
import { artists } from "../states";

/**
 * @func artistsReducer
 * @param state 
 * @param action 
 * @return {Array}
 */
export let artistsReducer = (state = artists, action) => {
  let newArtists;

  switch (action.type) {
    case SET_ARTISTS:
      newArtists = [];
      newArtists.push(...action.payload);
      return [...newArtists];
    case LOAD_MORE_ARTISTS:
      newArtists = [...state];
      newArtists.push(...action.payload);
      return [...newArtists];
    case CLEAR_ARTISTS:
      return [];

    default:
  }
  return state;
};
