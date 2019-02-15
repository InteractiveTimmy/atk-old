// react
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
// import store from './redux/store';

// site components
import { Desktop } from './sites';

// eslint-disable-next-line no-console
/*
ReactDOM.render(
  <Provider store={store}>
    <Desktop />
  </Provider>,
  document.getElementById('app'),
);
*/

ReactDOM.render(
  <React.Fragment>
    <Desktop />
  </React.Fragment>,
  document.getElementById('app'),
);
