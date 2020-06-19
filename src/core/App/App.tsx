import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from 'screens/Home/Home';
import { Recipes } from 'screens/Recipes/Recipes';
import { Search } from 'screens/Search/Search';

export const App = () => (
  <Router>
    <Switch>
      <Route path="/recipes">
        <Recipes />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);
