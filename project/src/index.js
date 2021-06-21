import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {reviews as mockReviews} from './mocks/reviews';
import Adapter from './utils/adapter';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';

const reviews = new Adapter(mockReviews).normalize();
const state = configureStore({reducer});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={state}>
      <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
