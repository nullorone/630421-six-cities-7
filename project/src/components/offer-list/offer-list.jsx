import React from 'react';
import {arrayOf, shape} from 'prop-types';
import Card from '../card/card';
import cardProp from '../card/card.prop';

function OfferList(props) {
  const [cardIdx, setCardIdx] = React.useState(null);

  // eslint-disable-next-line no-console
  console.log(cardIdx);

  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((offer) => (
        <Card
          key={`card-${offer.id}`}
          handleCardMouseEnter={() => {
            setCardIdx(offer.id);
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
