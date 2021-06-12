import React from 'react';
import cardProp from '../card/card.prop';
import {string, arrayOf, shape} from 'prop-types';
import FavoritesCard from '../favorites-card/favorites-card';

function FavoritesItem(props) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{props.city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {props.places.map((place) => <FavoritesCard key={`favorites-card-${place.id}`} {...place}/>)}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  city: string.isRequired,
  places: arrayOf(shape(cardProp)),
};

export default FavoritesItem;
