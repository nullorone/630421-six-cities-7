import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {arrayOf, shape} from 'prop-types';
import Main from '../main/main';
import SingIn from '../sing-in/sing-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import cardProp from '../card/card.prop';


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
        <Route exact path="/offer/:id">
          <Room/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: arrayOf(shape(cardProp)),
};

export default App;
