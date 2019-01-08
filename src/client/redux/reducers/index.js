import { combineReducers } from 'redux';
import themeReducer from './theme-reducer.js';

export default combineReducers( {
  theme: themeReducer
} );