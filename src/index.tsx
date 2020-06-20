import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from 'core/App/App';
import { GlobalStyle } from 'core/styles/global';
import { Theme as ThemeProvider } from 'core/styles/theme';
import { store } from 'store';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
