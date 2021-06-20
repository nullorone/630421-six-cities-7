import React from 'react';
import {arrayOf, string} from 'prop-types';

function OfferInside(props) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {props.goods.map((good) => (
          <li key={`inside-item-${good}`} className="property__inside-item">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
}

OfferInside.propTypes = {
  goods: arrayOf(string.isRequired).isRequired,
};

export default OfferInside;
