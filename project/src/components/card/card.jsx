import React from 'react';
import cardProp from './card.prop';
import {Link} from 'react-router-dom';

function Card(props) {
  return (
    <article className="cities__place-card place-card" data-id={props.id} onMouseEnter={props.handleCardMouseEnter}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        {props.isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <Link to={`/offer/${props.id}`}>
          <img
            className="place-card__image"
            src={props.previewImage}
            width="260"
            height="200"
            alt={`Place ${props.title}`}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${props.isFavorite && ' place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(props.rating * 100 / 5)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${props.id}`}>{props.title}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

Card.propTypes = cardProp;

export default Card;
