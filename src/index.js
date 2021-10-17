import React from 'react';
import ReactDom from 'react-dom';
import App from './pages/_app';
import './sass/index.scss';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducer';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
