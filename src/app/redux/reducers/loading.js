import { } from "../actions/albums";
import { SET_ARTISTS_IN_PROGRESS } from "../actions/artists";
import { isLoading } from "../states";
/**
 * @func loadingReducer
 * @param state 
 * @param action 
 * @return {object}
 */
export let loadingReducer = (state = isLoading, action) => {
  switch (action.type) {
    case SET_ARTISTS_IN_PROGRESS:
      return {
        isLoading: true
      }
    default:
  }
  return state;
};
