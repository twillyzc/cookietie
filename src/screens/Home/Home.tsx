import React from 'react';
import { Helmet } from 'react-helmet';

import { Header, Title, Sidebar, Footer, Layout, Content } from 'components';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Layout>
        <Header />
        <Sidebar />
        <Title>
          <h1>Home</h1>
        </Title>
        <Content>{'home'}</Content>
        <Footer />
      </Layout>
    </>
  );
};
