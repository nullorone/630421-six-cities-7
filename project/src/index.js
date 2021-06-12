import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers as mockOffers} from './mocks/offers';
import Adapter from './utils/adapter';

const offers = new Adapter(mockOffers).normalize();

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers}/>
  </React.StrictMode>,
  document.getElementById('root'));
