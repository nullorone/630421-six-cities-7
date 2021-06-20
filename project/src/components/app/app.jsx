import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {arrayOf, shape} from 'prop-types';
import Main from '../main/main';
import SingIn from '../sing-in/sing-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import cardProp from '../card/card.prop';
import reviewProp from '../review/review.prop';


function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={props.offers}/>
        </Route>
        <Route exact path="/login">
          <SingIn/>
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={props.offers}/>
        </Route>
        <Route exact path="/offer/:id" render={({match}) => {
          const clickedOffer = props.offers.find((offer) => offer.id === Number(match.params.id));
          const filteredOffers = props.offers.filter((offer) => offer.id !== clickedOffer.id);

          return <Room offer={clickedOffer} reviews={props.reviews} recommendations={filteredOffers}/>;
        }}
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: arrayOf(shape(cardProp)),
  reviews: arrayOf(shape(reviewProp)),
};

export default App;
