import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './core/App/App';
import { GlobalStyle } from './core/styles';
import { Provider } from 'react-redux';
import { store } from 'store';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
