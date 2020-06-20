import React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Layout, Content } from 'components/Layout/Layout';
import { Title } from 'components/Title/Title';

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
