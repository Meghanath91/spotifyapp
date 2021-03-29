import { SET_ALBUMS } from "../actions";
import { albums } from "../states";
export let albumsReducer = (state = albums, action) => {
  let newAlbums;

  switch (action.type) {
    case SET_ALBUMS:
      newAlbums = [...state];
      newAlbums.push(...action.payload);
      return [...newAlbums];

    default:
  }
  return state;
};
