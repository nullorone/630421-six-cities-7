const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  SET_CARD_IDX_HOVER: 'SET_CARD_IDX_HOVER',
  FILTERED_OFFERS_OF_CITY: 'FILTERED_OFFERS_OF_CITY',
  FILTERED_OFFERS_OF_SORT: 'FILTERED_OFFERS_OF_SORT',
  GET_OFFERS: 'GET_OFFERS',
  GET_REVIEWS: 'GET_REVIEWS',
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  filteredOffersOfCity: (city) => ({
    type: ActionType.FILTERED_OFFERS_OF_CITY,
    payload: city,
  }),
  filteredOffersOfSort: (sortName) => ({
    type: ActionType.FILTERED_OFFERS_OF_SORT,
    payload: sortName,
  }),
  setCardIdxHover: (id) => ({
    type: ActionType.SET_CARD_IDX_HOVER,
    payload: id,
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
  }),
  getReviews: () => ({
    type: ActionType.GET_REVIEWS,
  }),
};

export {ActionType, ActionCreator};
