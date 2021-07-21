import React from 'react';
import './not-found.css';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="wrapper">
      <h2 className="wrapper__title">Page not found</h2>
      <Link to="/" className="wrapper__link">Comeback to main page</Link>
    </div>
  );
}

export default NotFound;
