import { VIEW_LOAD_THEME, VIEW_SET_VIEW } from './types';

export const readTheme = () => (dispatch) => {
  // TODO: wire to server
  dispatch({
    type: VIEW_LOAD_THEME,
    data: {
      foreground: '#333',
      background: '#eee',
      target: '#fff',
      primary: '#06b',
      accent: '#34b',
      success: '#6b4',
      processing: '#0be',
      warning: '#fa1',
      error: '#e21',
    },
  });
};

export const updateSite = view => (dispatch) => {
  dispatch({
    type: VIEW_SET_VIEW,
    data: view,
  });
};
