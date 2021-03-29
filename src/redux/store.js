import { createStore, combineReducers } from 'redux';
// import { reducer } from './reducer';
import { artistsReducer } from './Reducers/artists';

export const store = createStore(
  combineReducers({
    artists: artistsReducer
  })
);

