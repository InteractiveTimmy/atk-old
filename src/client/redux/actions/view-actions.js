import { SET_MODE, SET_THEME, SET_VISIBLE } from './types.js';

export const setMode = ( d ) => dispatch => {
  dispatch( {
    type: SET_MODE,
    data: d
  } )
}

export const setVisible = ( d ) => dispatch => {
  dispatch( {
    type: SET_VISIBLE,
    data: d
  } );
}

export const getTheme = ( ) => dispatch => {
  // update this to use window.fetch to get data from server

  // template data
  let data = {
    foreground: '#eeeeee',
    background: '#333333',
    target: '#eeeeee',
    primary: '#00ddaa',
    accent: '#005577',
    warning: '#ffaa11',
    info: '#00bbee',
    success: '#33dd55',
    error: '#ff5533'
  };

  dispatch( {
    type: SET_THEME,
    data: data
  } );
}

export const setTheme = ( d ) => dispatch => {
  // update this to use window.fetch to set data on server

  dispatch( {
    type: SET_THEME,
    data: d
  } );
}