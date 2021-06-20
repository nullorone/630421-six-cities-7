import React from 'react';
import {arrayOf, shape} from 'prop-types';
import Review from '../review/review';
import reviewProp from '../review/review.prop';

function ReviewList(props) {
  return (
    <ul className="reviews__list">
      {props.reviews.map((review) => <Review key={`review-${review.id}`} {...review}/>)}
    </ul>
  );
}

ReviewList.propTypes = {
  reviews: arrayOf(shape(reviewProp)),
};

export default ReviewList;
