import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Search, Recipes, Recipe } from 'screens';

export const App = () => (
  <Router>
    <Switch>
      <Route path="/recipes">
        <Recipes />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/recipe/:id">
        <Recipe />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);
