import { createStore, combineReducers } from 'redux';
import { albumsReducer } from '../reducers/albums';
import { artistsReducer } from '../reducers/artists';

export const store = createStore(
  combineReducers({
    artists: artistsReducer,
    albums: albumsReducer
  })
);

