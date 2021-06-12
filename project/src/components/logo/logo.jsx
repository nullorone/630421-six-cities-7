import React from 'react';
import {Link} from 'react-router-dom';
import {bool} from 'prop-types';
import classNames from 'classnames/bind';

function Logo(props) {
  return (
    <Link className={classNames(
      'header__logo-link',
      props.isActive && 'header__logo-link--active',
    )}
    to="/"
    >
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>
  );
}

Logo.propTypes = {
  isActive: bool,
};

export default Logo;
