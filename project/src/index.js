import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers as mockOffers} from './mocks/offers';
import {reviews as mockReviews} from './mocks/reviews';
import Adapter from './utils/adapter';

const offers = new Adapter(mockOffers).normalize();
const reviews = new Adapter(mockReviews).normalize();

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} reviews={reviews}/>
  </React.StrictMode>,
  document.getElementById('root'));
