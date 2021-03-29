import { SET_ARTISTS, LOAD_MORE_ARTISTS } from "../actions/artists";
import { artists } from "../states";
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

    default:
  }
  return state;
};
