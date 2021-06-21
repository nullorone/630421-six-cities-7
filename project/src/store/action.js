const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILTERED_OFFERS: 'FILTERED_OFFERS',
  GET_OFFERS: 'GET_OFFERS',
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  filteredOffers: (city) => ({
    type: ActionType.FILTERED_OFFERS,
    payload: city,
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
  }),
};

export {ActionType, ActionCreator};
