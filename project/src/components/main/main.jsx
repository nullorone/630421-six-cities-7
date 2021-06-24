import React from 'react';
import {arrayOf, shape, string} from 'prop-types';
import cardProp from '../card/card.prop';
import OfferList from '../offer-list/offer-list';
import Header from '../header/header';
import Map from '../map/map';
import LocationList from '../location-list/location-list';
import Sort from '../sort/sort';

function Main(props) {
  const citiesOffers = props.offers.filter((offer) => offer.city.name === props.city);
  const offerLocations = citiesOffers.map((offer) => offer.location);

  return (
    <div className="page page--gray page--main">
      <Header isActiveLogo />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList/>
          </section>
        </div>
        {citiesOffers.length && (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{citiesOffers.length} places to stay in {citiesOffers[0].city.name}</b>
                <Sort/>
                <OfferList offers={citiesOffers}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map locations={offerLocations}/>
                </section>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: arrayOf(shape(cardProp)),
  city: string.isRequired,
};

export default Main;
