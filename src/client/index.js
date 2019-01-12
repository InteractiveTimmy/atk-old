'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store.js';

import Index from './sites/index.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById( 'app' )
);