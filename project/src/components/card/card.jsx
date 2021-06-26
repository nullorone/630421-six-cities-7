import React from 'react';
import cardProp from './card.prop';
import {Link} from 'react-router-dom';
import {func, string, shape} from 'prop-types';
import classNames from 'classnames';

function Card(props) {
  let articleClass = 'cities__place-card';
  let cardWrapperClass = 'cities__image-wrapper';

  switch (props.type) {
    case 'near':
      articleClass = 'near-places__card';
      cardWrapperClass = 'near-places__image-wrapper';
      break;
    default:
  }

  return (
    <article
      className={classNames(articleClass, 'place-card')}
      data-id={props.card.id}
      onMouseEnter={props.handleCardMouseEnter}
      onMouseLeave={props.handleCardMouseLeave}
    >
      <div className={classNames(cardWrapperClass, 'place-card__image-wrapper')}>
        {props.card.isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <Link to={`/offer/${props.card.id}`}>
          <img
            className="place-card__image"
            src={props.card.previewImage}
            width="260"
            height="200"
            alt={`Place ${props.card.title}`}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${props.card.isFavorite && ' place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(props.card.rating * 20)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${props.card.id}`}>{props.card.title}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  type: string,
  card: shape(cardProp),
  handleCardMouseEnter: func,
  handleCardMouseLeave: func,
};

export default Card;
