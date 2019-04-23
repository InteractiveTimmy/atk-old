// react
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// site components
import { Desktop } from './views';

// TODO migrate to desktop switcher class

ReactDOM.render(
  <Provider store={store}>
    <Desktop />
  </Provider>,
  document.getElementById('app'),
);
