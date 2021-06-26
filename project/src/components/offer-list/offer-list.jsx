import React from 'react';
import {arrayOf, func, number, shape} from 'prop-types';
import Card from '../card/card';
import cardProp from '../card/card.prop';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

function OfferList(props) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((offer) => (
        <Card
          key={`card-${offer.id}`}
          handleCardMouseEnter={() => {
            if (props.cardIdxHovered !== offer.id) {
              props.setCardIdxHover(offer.id);
            }
          }}
          handleCardMouseLeave={() => {
            props.setCardIdxHover(null);
          }}
          card={offer}
        />
      ))}
    </div>
  );
}

OfferList.propTypes = {
  cardIdxHovered: number,
  offers: arrayOf(shape(cardProp)),
  setCardIdxHover: func,
};

const mapStateToProps = (state) => ({
  cardIdxHovered: state.cardIdxHovered,
});

const mapDispatchToProps = (dispatch) => ({
  setCardIdxHover(id) {
    dispatch(ActionCreator.setCardIdxHover(id));
  },
});

export {OfferList};
export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
