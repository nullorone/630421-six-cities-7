import {ActionCreator} from './action';
import {APIRoute} from '../utils/const';

export const fetchHotels = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.getHotels(data)))
);

