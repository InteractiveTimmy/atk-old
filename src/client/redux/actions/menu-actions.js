import {
  MENU_LOAD_BRAND,
  MENU_LOAD_PRIMARY,
  MENU_LOAD_SECONDARY,
  MENU_LOAD_ACCOUNT,
} from './types';

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
      { name: 'Music', icon: 'Album' },
      { name: 'Movies', icon: 'PlayCircle' },
      { name: 'Games', icon: 'Games' },
    ],
  });
};

export const loadSecondary = () => (dispatch) => {
  dispatch({
    type: MENU_LOAD_SECONDARY,
    data: [
      { name: 'Settings', icon: 'Settings' },
      { name: 'Chat', icon: 'Chat' },
      { name: 'See All', icon: 'Apps' },
    ],
  });
};

export const loadAccount = () => (dispatch) => {
  dispatch({
    type: MENU_LOAD_ACCOUNT,
    data: {
      name: 'Account',
      icon: 'AccountCircle',
    },
  });
};
