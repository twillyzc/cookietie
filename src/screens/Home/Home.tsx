import React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from 'components';
import { Footer } from 'components';
import { Layout, Content } from 'components';
import { Title } from 'components';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Layout>
        <Header />
        <Title>
          <h1>Home</h1>
        </Title>
        <Content>{'home'}</Content>
        <Footer />
      </Layout>
    </>
  );
};
