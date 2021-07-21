import React from 'react';
import {arrayOf, shape} from 'prop-types';
import Card from '../card/card';
import cardProp from '../card/card.prop';
import {ActionCreator} from '../../store/action';
import {useDispatch, useSelector} from 'react-redux';

function OfferList(props) {
  const dispatch = useDispatch();
  const cardIdxSelector = useSelector((state) => state.cardIdxHovered);

  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((offer) => (
        <Card
          key={`card-${offer.id}`}
          handleCardMouseEnter={() => {
            if (cardIdxSelector !== offer.id) {
              dispatch(ActionCreator.setCardIdxHover(offer.id));
            }
          }}
          handleCardMouseLeave={() => {
            dispatch(ActionCreator.setCardIdxHover(null));
          }}
          card={offer}
        />
      ))}
    </div>
  );
}

OfferList.propTypes = {
  offers: arrayOf(shape(cardProp)),
};

export default OfferList;
