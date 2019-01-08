import { SET_THEME } from '../actions/types.js';

const initialState = { };

export default ( state = initialState, action ) => {
  const newState = { ...state };

  switch ( action.type )
  {
    case SET_THEME:
      newState = action.data;
      break;

    default:
      break;
  }

  return newState;
};