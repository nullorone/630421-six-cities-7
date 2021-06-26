import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';

const state = configureStore({reducer});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={state}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
