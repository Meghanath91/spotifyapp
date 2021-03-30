import { LOAD_MORE_ALBUMS, SET_ALBUMS } from "../actions/albums";
import { albums } from "../states";
/**
 * @func albumsReducer
 * @param state 
 * @param action 
 * @return {Array}
 */
export const albumsReducer = (state = albums, action) => {
  let newAlbums;

  switch (action.type) {
    case SET_ALBUMS:
      newAlbums = [];
      newAlbums.push(...action.payload);
      return [...newAlbums];
    case LOAD_MORE_ALBUMS:
      newAlbums = [...state];
      newAlbums.push(...action.payload);
      return [...newAlbums];
    default:
  }
  return state;
};
