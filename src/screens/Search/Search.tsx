import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, Content } from 'components/Layout/Layout';
import { Title } from 'components/Title/Title';
import { Header } from 'components/Header/Header';
import { recipesRequest } from 'store/actions/recipes.actions';
import { useDispatch } from 'react-redux';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { Footer } from 'components/Footer/Footer';
import { useLocation } from 'react-router-dom';

const useQuery = () => new URLSearchParams(useLocation().search);

export const Search = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('title');
  const [isLoading, setIsLoading] = useState(false);

  const query = useQuery().get('query');

  const getRecipes = async (query: string) => {
    try {
      setIsLoading(true);
      await dispatch(recipesRequest(query));
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      setTitle(query);
    }
  };

  useEffect(() => {
    if (query) {
      getRecipes(query);
    }
  }, []);

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
        <Content>{isLoading ? 'Loading...' : <RecipesList />}</Content>
        <Footer />
      </Layout>
    </>
  );
};
