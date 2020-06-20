import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { recipesRequest } from 'store/actions/recipes.actions';
import {
  Layout,
  Content,
  Title,
  Header,
  RecipesList,
  Footer,
  Sidebar,
} from 'components';

const useQuery = () => new URLSearchParams(useLocation().search);

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>('title');
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        <Sidebar />
        <Title>
          <h1>{title}</h1>
        </Title>
        <Content>{isLoading ? 'Loading...' : <RecipesList />}</Content>
        <Footer />
      </Layout>
    </>
  );
};
