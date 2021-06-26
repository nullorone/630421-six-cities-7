import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {arrayOf, func, shape, string} from 'prop-types';
import Main from '../main/main';
import SingIn from '../sing-in/sing-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import cardProp from '../card/card.prop';
import reviewProp from '../review/review.prop';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';


function App(props) {
  React.useEffect(() => {
    props.getOffers();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={props.offers} city={props.city}/>
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
  city: string.isRequired,
  offers: arrayOf(shape(cardProp)),
  reviews: arrayOf(shape(reviewProp)),
  getOffers: func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  getOffers() {
    dispatch(ActionCreator.getOffers());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
