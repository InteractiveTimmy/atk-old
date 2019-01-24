import { SET_MODE, SET_THEME, SET_VISIBLE } from '../actions/types.js';

const initialState = {
  theme: { },
  visible: { },
  mode: 'Default'
};

export default ( state = initialState, action ) => {
  const newState = { ...state };

  switch ( action.type )
  {
    case SET_MODE:
      newState.mode = action.data;
      break;

    case SET_THEME:
      newState.theme = action.data;
      break;

    case SET_VISIBLE:
      newState.visible[action.data.area] = action.data.value;
      break;

    default:
      break;
  }

  return newState;
};