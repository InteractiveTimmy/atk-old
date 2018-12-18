'use strict';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store.js';

import { Main } from './sites/index.js';
import './index.css';

const myMain = withRouter( props => <Main {...props} /> );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Route path='/' component={myMain} />
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById( 'app' )
);