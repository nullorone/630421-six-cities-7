import React from 'react';
import Header from '../header/header';
import Form from '../form/form';
import ReviewList from '../review-list/review-list';
import {arrayOf, shape} from 'prop-types';
import reviewProp from '../review/review.prop';
import cardProp from '../card/card.prop';
import OfferInside from '../offer-inside/offer-inside';
import Map from '../map/map';
import Card from '../card/card';
import classNames from 'classnames/bind';

function Room(props) {
  const countReviews = props.reviews.length - 1;
  const mapLocations = props.recommendations.map((offer) => offer.location);
  const offerTypeFormat = props.offer.type.substr(0, 1).toUpperCase() + props.offer.type.substr(1);

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {props.offer.images.map((image) => (
                <div key={`offer-image-${image.split('.')[0]}`} className="property__image-wrapper">
                  <img className="property__image" src={image} alt={`View ${image.split('.')[0]}`}/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {props.offer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {props.offer.title}
                </h1>
                <button
                  className={classNames(
                    'property__bookmark-button button',
                    props.offer.isFavorite && 'property__bookmark-button--active',
                  )}
                  type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${props.offer.rating * 20}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{props.offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerTypeFormat}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {props.offer.bedrooms} Bedroom{props.offer.bedrooms > 1 ? 's' : ''}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {props.offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{props.offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <OfferInside goods={props.offer.goods}/>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={props.offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {props.offer.host.name}
                  </span>
                  {props.offer.host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {props.offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{countReviews}</span></h2>
                <ReviewList reviews={props.reviews}/>
                <Form/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map locations={mapLocations}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {props.recommendations && props.recommendations.map((offer) => <Card key={`recommendation-offer-${offer.id}`} type="near" card={offer}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  offer: shape(cardProp),
  reviews: arrayOf(shape(reviewProp)),
  recommendations: arrayOf(shape(cardProp)),
};

export default Room;
