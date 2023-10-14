import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/movies">
      {/* Render a component that lists all movies */}
    </Route>
    <Route exact path="/movies/:title">
      <Movie />
    </Route>
    <Route exact path="/directors">
      <Directors />
    </Route>
    <Route exact path="/actors">
      <Actors />
    </Route>
    <Route>
      <ErrorPage />
    </Route>
  </Switch>
);

export default routes;