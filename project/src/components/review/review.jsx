import React from 'react';
import reviewProp from './review.prop';

function Review(props) {
  const date = new Date(props.date);
  const monthLong = date.toLocaleString('en-US', { month: 'long' });
  const fullYear = date.getFullYear();
  const dateFormat = `${fullYear}-${date.getMonth()}-${date.getDay()}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={props.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{props.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${props.rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{props.comment}</p>
        <time className="reviews__time" dateTime={dateFormat}>{monthLong} {fullYear}</time>
      </div>
    </li>
  );
}

Review.propTypes = reviewProp;

export default Review;
