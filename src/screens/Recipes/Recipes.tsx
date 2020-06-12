import React, { Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { Helmet } from 'react-helmet';

export const Recipes = () => (
  <Fragment>
    <Helmet>
      <title>Recipes</title>
    </Helmet>
    <Header />
    Recipes
  </Fragment>
);
