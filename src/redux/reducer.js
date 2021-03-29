import { SET_ARTISTS } from "./actions";
import { artists } from "./states";
export let reducer = (state = artists, action) => {
  let newArtists;

  switch (action.type) {
    case SET_ARTISTS:
      newArtists = [...state];
      newArtists.push(...action.payload);
      return [...newArtists];

    default:
  }
  return state;
};
