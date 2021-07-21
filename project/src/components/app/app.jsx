import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import SingIn from '../sing-in/sing-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import {useSelector} from 'react-redux';
import Loader from '../loader/loader';
import NotFound from '../not-found/not-found';


function App() {
  const isDataLoadedSelector = useSelector((state) => state.isDataLoaded);
  const citySelector = useSelector((state) => state.city);
  const offersSelector = useSelector((state) => state.offers);
  const reviewsSelector = useSelector((state) => state.reviews);

  if (!isDataLoadedSelector) {
    return <Loader/>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={offersSelector} city={citySelector}/>
        </Route>
        <Route exact path="/login">
          <SingIn/>
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offersSelector}/>
        </Route>
        <Route exact path="/offer/:id" render={({match}) => {
          const clickedOffer = offersSelector.find((offer) => offer.id === Number(match.params.id));
          const filteredOffers = offersSelector.filter((offer) => offer.id !== clickedOffer.id);

          return <Room offer={clickedOffer} reviews={reviewsSelector} recommendations={filteredOffers}/>;
        }}
        >
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
