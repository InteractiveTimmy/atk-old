import {
  MENU_LOAD_BRAND,
  MENU_LOAD_PRIMARY,
  MENU_LOAD_SECONDARY,
  MENU_LOAD_ACCOUNT,
} from '../actions/types';

const initialState = {
  brand: {},
  primary: [],
  secondary: [],
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case MENU_LOAD_BRAND:
      newState.brand = action.data;
      break;

    case MENU_LOAD_PRIMARY:
      newState.primary = action.data;
      break;

    case MENU_LOAD_SECONDARY:
      newState.secondary = action.data;
      break;

    case MENU_LOAD_ACCOUNT:
      newState.account = action.data;
      break;

    default:
      break;
  }

  return newState;
};
