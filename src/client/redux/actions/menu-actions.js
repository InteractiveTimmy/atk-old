import { MENU_LOAD_BRAND, MENU_LOAD_PRIMARY, MENU_LOAD_SECONDARY } from './types';

export const loadBrand = () => (dispatch) => {
  dispatch({
    type: MENU_LOAD_BRAND,
    data: {
      name: 'Brand',
      icon: 'Brand',
    },
  });
};

export const loadPrimary = () => (dispatch) => {
  dispatch({
    type: MENU_LOAD_PRIMARY,
    data: [
      { name: 'Primary A', icon: 'Brand' },
      { name: 'Primary B', icon: 'Brand' },
      { name: 'Primary C', icon: 'Brand' },
    ],
  });
};

export const loadSecondary = () => (dispatch) => {
  dispatch({
    type: MENU_LOAD_SECONDARY,
    data: [
      { name: 'Secondary A', icon: 'Brand' },
      { name: 'Secondary B', icon: 'Brand' },
      { name: 'Secondary C', icon: 'Brand' },
    ],
  });
};
