// dependencies
import { combineReducers } from 'redux';

// reducers
import view from './view-reducer';
import menu from './menu-reducer';
import widget from './widget-reducer';
import applet from './applet-reducer';

export default combineReducers({
  view,
  menu,
  widget,
  applet,
});
