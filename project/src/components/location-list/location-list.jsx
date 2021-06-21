import React from 'react';
import classNames from 'classnames';
import {func, string} from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

const citiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function LocationList(props) {
  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city, idx) => (
        <li key={`city-name-${city}`} className="locations__item">
          <a
            className={classNames(
              'locations__item-link tabs__item',
              (city === props.city) && 'tabs__item--active',
            )}
            onClick={() => {
              props.changeCity(city);
              props.updateOffers(city);
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

LocationList.propTypes = {
  city: string.isRequired,
  changeCity: func.isRequired,
  updateOffers: func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(name) {
    dispatch(ActionCreator.changeCity(name));
  },
  updateOffers(name) {
    dispatch(ActionCreator.filteredOffers(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
