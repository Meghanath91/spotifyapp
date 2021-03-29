import { LOAD_MORE_ALBUMS, SET_ALBUMS } from "../actions/albums";
import { albums } from "../states";
export let albumsReducer = (state = albums, action) => {
  let newAlbums;

  switch (action.type) {
    case SET_ALBUMS:
      newAlbums = [];
      newAlbums.push(...action.payload);
      return [...newAlbums];
    case LOAD_MORE_ALBUMS:
      newAlbums = [...state];
      console.log(newAlbums)
      newAlbums.push(...action.payload);
      console.log(newAlbums)
      return [...newAlbums]
    default:
  }
  return state;
};
