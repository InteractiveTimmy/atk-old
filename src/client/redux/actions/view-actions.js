import { VIEW_LOAD_COLORS, VIEW_SET_SITE } from './types';

export const loadColors = () => (dispatch) => {
  dispatch({
    type: VIEW_LOAD_COLORS,
    data: {
      forground: '#333',
      background: '#eee',
      target: '#fff',
      primary: '#08b',
      accent: '#0b8',
      success: '#6b4',
      processing: '#0be',
      warning: '#fa1',
      error: '#e21',
    },
  });
};

export const setSite = view => (dispatch) => {
  dispatch({
    type: VIEW_SET_SITE,
    data: view,
  });
};
