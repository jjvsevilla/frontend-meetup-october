import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';

import './index.css';
import App from './components/App';

const repo = `/${window.location.pathname.split('/')[1]}`;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={repo}>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
