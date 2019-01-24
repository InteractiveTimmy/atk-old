import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './reducers/index.js';

const initialState = { };

const middleware = [ thunk ];

// check for devtools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__( ) :
  compose;

// create store
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware( ...middleware ),
    composeEnhancers
  )
);

export default store;