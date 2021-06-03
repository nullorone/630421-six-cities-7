import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {arrayOf, bool, number, shape, string} from 'prop-types';
import Main from '../main/main';
import SingIn from '../sing-in/sing-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';


function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main cards={props.cards}/>
        </Route>
        <Route exact path="/login">
          <SingIn/>
        </Route>
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
        <Route exact path="/offer/:id">
          <Room/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cards: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      type: string.isRequired,
      link: string.isRequired,
      img: shape({
        src: string.isRequired,
        alt: string.isRequired,
      }),
      countStars: number.isRequired,
      price: number.isRequired,
      isPremium: bool.isRequired,
      isFavorites: bool.isRequired,
    }),
  ),
};

export default App;
