import React from 'react';
import {arrayOf, shape} from 'prop-types';
import FavoritesItem from '../favorites-item/favorites-item';
import cardProp from '../card/card.prop';
import {Link} from 'react-router-dom';
import Header from '../header/header';

function Favorites(props) {
  const favoriteItems = props.offers.reduce((acc, item) => {
    const indexFavoriteItem = acc.findIndex((el) => el.city && el.city === item.city.name);

    if (indexFavoriteItem >= 0) {
      acc[indexFavoriteItem].places.push(item);
    } else {
      acc.push({
        id: acc.length,
        city: item.city.name,
        places: [item],
      });
    }

    return acc;
  }, []);

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteItems.map((item) => <FavoritesItem key={`favorites-item-${item.places}`} {...item}/>)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

Favorites.propTypes = {
  offers: arrayOf(shape(cardProp)),
};

export default Favorites;
