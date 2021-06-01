import React from 'react';
import {arrayOf, bool, number, shape, string} from 'prop-types';
import Main from '../main/main';


function App(props) {
  return <Main cards={props.cards}/>;
}

App.propTypes = {
  cards: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      type: string.isRequired,
      link: string.isRequired,
      img: shape({
        src: string.isRequired,
        alt: string.isRequired,
      }),
      countStars: number.isRequired,
      price: number.isRequired,
      isPremium: bool.isRequired,
      isFavorites: bool.isRequired,
    }),
  ),
};

export default App;
