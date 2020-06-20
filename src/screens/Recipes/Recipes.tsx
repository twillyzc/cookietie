import React from 'react';
import { Header } from 'components/Header/Header';
import { Helmet } from 'react-helmet';

export const Recipes: React.FC = () => (
  <>
    <Helmet>
      <title>Recipes</title>
    </Helmet>
    <Header />
    Recipes
  </>
);
