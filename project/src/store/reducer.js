import {offers} from '../mocks/offers';

const initState = {
  city: '',
  offers,
};

const reducer = (state = initState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};

export {reducer};
