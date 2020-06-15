import React from 'react';
import { Header } from 'components/Header/Header';
import { Helmet } from 'react-helmet';
import { Layout, Content } from 'components/Layout/Layout';
import { Title } from 'components/Title/Title';
import { useDispatch } from 'react-redux';
import { recipesRequest } from 'store/actions/recipes.actions';

export const Home = () => {
  const dispatch = useDispatch();
  const getRecipes = () => {
    dispatch(recipesRequest('pizza'));
  };
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
          <button onClick={getRecipes}>aaaaaaa</button>
        </Content>
      </Layout>
    </>
  );
};
