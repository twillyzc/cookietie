import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';

import { Layout, Content, Title, Header, Footer, Sidebar } from 'components';
import { useParams } from 'react-router-dom';
import { recipeRequest } from 'store/actions/recipe.actions';

export const Recipe: React.FC = () => {
  const { title }: any = useSelector<any>((state) => state.recipe);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams();

  const dispatch = useDispatch();

  const getRecipe = useCallback(
    async (query: string) => {
      try {
        setIsLoading(true);
        await dispatch(recipeRequest(query));
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getRecipe(id);
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
          <h1>title</h1>
        </Title>
        <Content>{isLoading ? 'Loading...' : title || 'fail'}</Content>
        <Footer />
      </Layout>
    </>
  );
};
