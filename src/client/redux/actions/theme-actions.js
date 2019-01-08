import { SET_THEME } from './types.js';

export const setTheme = ( d ) => dispatch => {
  dispatch( {
    type: SET_THEME,
    data: d
  } );
};