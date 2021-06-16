import React from 'react';
import {arrayOf, shape, number, string} from 'prop-types';
import classNames from 'classnames';

function LocationList(props) {
  const [isActiveCityId, setIsActiveCityId] = React.useState(null);

  return (
    <ul className="locations__list tabs__list">
      {props.cities.map((city, idx) => (
        <li key={city.id} className="locations__item">
          <a
            className={classNames(
              'locations__item-link tabs__item',
              (city.id === isActiveCityId || idx === 0) && 'tabs__item--active',
            )}
            onClick={() => {
              setIsActiveCityId(city.id);
            }}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

LocationList.propTypes = {
  cities: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
  })),
};

export default LocationList;
