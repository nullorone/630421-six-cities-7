import Adapter from '../utils/adapter';
import {offers as mockOffers} from '../mocks/offers';
import {reviews as mockReviews} from '../mocks/reviews';
import {ActionType} from './action';
import {SortName, INIT_CITY_NAME} from '../utils/const';

const initState = {
  city: INIT_CITY_NAME,
  initOffers: [],
  offers: [],
  reviews: [],
  cardIdxHover: null,
};

const reducer = (state = initState, {type, payload}) => {
  switch (type) {
    case ActionType.GET_OFFERS:
      return {
        ...state,
        offers: [...new Adapter(mockOffers).normalize()],
        initOffers: [...new Adapter(mockOffers).normalize()],
      };
    case ActionType.GET_REVIEWS:
      return {
        ...state,
        reviews: [...new Adapter(mockReviews).normalize()],
      };
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: payload,
      };
    case ActionType.FILTERED_OFFERS_OF_CITY:
      return {
        ...state,
        offers: [...state.initOffers].filter((offer) => offer.city.name === payload),
      };
    case ActionType.FILTERED_OFFERS_OF_SORT:
      return {
        ...state,
        offers: payload === SortName.popular
          ? [...state.initOffers].filter((offer) => offer.city.name === state.city)
          : [...state.offers].sort(getSortOffers(payload)),
      };
    case ActionType.SET_CARD_IDX_HOVER:
      return {
        ...state,
        cardIdxHover: payload,
      };
    default:
      return state;
  }
};

function getSortOffers(sortName) {
  switch (sortName) {
    case SortName.top:
      return (a, b) => b.rating - a.rating;
    case SortName.toHight:
      return (a, b) => a.price - b.price;
    case SortName.toLow:
      return (a, b) => b.price - a.price;
    default:
  }
}

export {reducer};
