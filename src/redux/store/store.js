import { createStore, combineReducers, } from "redux";
import { albumsReducer } from "../reducers/albums";
import { artistsReducer } from "../reducers/artists";
import { searchReducer } from "../reducers/search";

export const store = createStore(
  combineReducers({
    artists: artistsReducer,
    albums: albumsReducer,
    searchQuery: searchReducer
  }),
);
