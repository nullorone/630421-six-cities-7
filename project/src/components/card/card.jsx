import React from 'react';
import {string, number, bool, shape} from 'prop-types';

function Card(props) {
  return (
    <article className="cities__place-card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        {props.isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <a href={props.link}>
          <img
            className="place-card__image"
            src={props.img.src}
            width="260"
            height="200"
            alt={props.img.alt}/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${props.isFavorites && ` place-card__bookmark-button--active`} button`}
                  type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (props.countStars * 100 / 5) + '%'}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={props.link}>{props.name}</a>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
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
}

export default Card;
