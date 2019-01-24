import { combineReducers } from 'redux';
import viewReducer from './view-reducer.js';

export default combineReducers( {
  view: viewReducer
} );