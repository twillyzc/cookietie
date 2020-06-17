import React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

import { Header } from 'components/Header/Header';
import { Layout, Content } from 'components/Layout/Layout';
import { Title } from 'components/Title/Title';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { recipesRequest } from 'store/actions/recipes.actions';

export const Home = () => {
  const dispatch = useDispatch();

  const getRecipes = async () => await dispatch(recipesRequest('tomato'));

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Layout>
        <Header />
        <Title>
          <h1>Title</h1>
        </Title>
        <Content>
          <>
            <button onClick={getRecipes}>Get recipes</button>
            <RecipesList />
          </>
        </Content>
      </Layout>
    </>
  );
};
