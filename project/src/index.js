import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {createAPI} from './store/api';
import {fetchHotels} from './store/api-actions';

const api = createAPI();

const state = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});


state.dispatch(fetchHotels());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={state}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
