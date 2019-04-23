import { VIEW_LOAD_THEME, VIEW_SET_VIEW } from '../actions/types';

const initialState = {
  theme: {},
  view: 'desktop',
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case VIEW_LOAD_THEME:
      newState.theme = action.data;
      break;

    case VIEW_SET_VIEW:
      newState.view = action.data;
      break;

    default:
      break;
  }

  return newState;
};
