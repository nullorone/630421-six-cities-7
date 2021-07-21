import React from 'react';
import classNames from 'classnames';
import {ActionCreator} from '../../store/action';
import {useDispatch, useSelector} from 'react-redux';

const citiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function LocationList() {
  const dispatch = useDispatch();
  const citySelector = useSelector((state) => state.city);

  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city, idx) => (
        <li key={`city-name-${city}`} className="locations__item">
          <a
            className={classNames(
              'locations__item-link tabs__item',
              (city === citySelector) && 'tabs__item--active',
            )}
            onClick={() => {
              dispatch(ActionCreator.changeCity(city));
              dispatch(ActionCreator.filteredOffersOfCity(city));
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LocationList;
