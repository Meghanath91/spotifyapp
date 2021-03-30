import { createStore, combineReducers, } from "redux";
import { albumsReducer } from "../reducers/albums";
import { artistsReducer } from "../reducers/artists";
import { searchReducer } from "../reducers/search";
import { loadingReducer } from "../reducers/loading";
//Redux store and reducer configuration
export const store = createStore(
  combineReducers({
    artists: artistsReducer,
    albums: albumsReducer,
    searchQuery: searchReducer,
    isLoading: loadingReducer,
  }),
);
