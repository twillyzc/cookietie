import React, { Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { Helmet } from 'react-helmet';
import { Layout, Content } from '../../components/Layout/Layout';
import { Title } from '../../components/Title/Title';

export const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Layout>
      <Header />
      <Title />
      <Content>hey</Content>
    </Layout>
  </Fragment>
);
