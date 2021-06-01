import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const cards = [
  {
    id: 1,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    link: '#',
    img: {
      src: 'img/apartment-01.jpg',
      alt: 'Place image',
    },
    countStars: 4,
    price: 120,
    isPremium: true,
    isFavorites: false,
  },
  {
    id: 2,
    name: 'Wood and stone place',
    type: 'Private room',
    link: '#',
    img: {
      src: 'img/room.jpg',
      alt: 'Place image',
    },
    countStars: 4,
    price: 80,
    isPremium: false,
    isFavorites: true,
  },
  {
    id: 3,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    link: '#',
    img: {
      src: 'img/apartment-02.jpg',
      alt: 'Place image',
    },
    countStars: 4,
    price: 132,
    isPremium: false,
    isFavorites: false,
  },
  {
    id: 4,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    link: '#',
    img: {
      src: 'img/apartment-03.jpg',
      alt: 'Place image',
    },
    countStars: 5,
    price: 180,
    isPremium: true,
    isFavorites: false,
  },
  {
    id: 5,
    name: 'Wood and stone place',
    type: 'Private room',
    link: '#',
    img: {
      src: 'img/room.jpg',
      alt: 'Place image',
    },
    countStars: 4,
    price: 80,
    isPremium: false,
    isFavorites: true,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App cards={cards}/>
  </React.StrictMode>,
  document.getElementById('root'));
