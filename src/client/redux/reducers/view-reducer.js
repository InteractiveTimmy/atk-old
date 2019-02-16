import { VIEW_LOAD_COLORS, VIEW_SET_SITE } from '../actions/types';

const initialState = {
  colors: {},
  site: 'desktop',
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case VIEW_LOAD_COLORS:
      newState.colors = action.data;
      break;

    case VIEW_SET_SITE:
      newState.site = action.data;
      break;

    default:
      break;
  }

  return newState;
};
