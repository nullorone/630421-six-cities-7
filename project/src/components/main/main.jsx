import React from 'react';
import {arrayOf, shape} from 'prop-types';
import cardProp from '../card/card.prop';
import OfferList from '../offer-list/offer-list';
import Header from '../header/header';
import Map from '../map/map';
import LocationList from '../location-list/location-list';

function Main(props) {
  const offerLocations = props.offers.map((offer) => offer.location);
  const citiesList = props.offers.reduce((acc, offer) => {
    const hasCityName = acc.length > 0 && acc.find((city) => city.name === offer.city.name);

    if (!hasCityName) {
      acc.push({
        id: offer.id,
        name: offer.city.name,
      });
    }

    return acc;
  }, []);

  return (
    <div className="page page--gray page--main">
      <Header isActiveLogo />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList cities={citiesList}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <OfferList offers={props.offers}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map locations={offerLocations}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: arrayOf(shape(cardProp)),
};

export default Main;
