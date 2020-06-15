import React from 'react';
import { Header } from 'components/Header/Header';
import { Helmet } from 'react-helmet';
import { Layout, Content } from 'components/Layout/Layout';
import { Title } from 'components/Title/Title';

import { Main } from 'components/Main/Main';

export const Home = () => {
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
          <Main />
        </Content>
      </Layout>
    </>
  );
};
