import Adapter from '../utils/adapter';
import {offers as mockOffers} from '../mocks/offers';
import {ActionType} from './action';

const INIT_CITY_NAME = 'Paris';
const INIT_OFFERS = new Adapter(mockOffers).normalize();

const initState = {
  city: INIT_CITY_NAME,
  offers: INIT_OFFERS.slice().filter((offer) => offer.city.name === INIT_CITY_NAME),
};

const reducer = (state = initState, {type, payload}) => {
  switch (type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: payload,
      };
    case ActionType.FILTERED_OFFERS:
      return {
        ...state,
        offers: INIT_OFFERS.filter((offer) => offer.city.name === payload),
      };
    default:
      return state;
  }
};

export {reducer};
