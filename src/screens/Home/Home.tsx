import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';

import { Header } from 'components/Header/Header';
import { Layout, Content } from 'components/Layout/Layout';
import { Title } from 'components/Title/Title';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { recipesRequest } from 'store/actions/recipes.actions';

export const Home = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('title');

  const getRecipes = async () => {
    try {
      await dispatch(recipesRequest('soup'));
    } catch (e) {
      console.log(e);
    } finally {
      setTitle('soup');
    }
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Layout>
        <Header />
        <Title>
          <h1>{title}</h1>
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
