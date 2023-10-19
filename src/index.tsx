import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>);
