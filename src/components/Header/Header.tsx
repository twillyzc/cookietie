import React from 'react';

import { Search } from 'components';
import { Container } from './Header.styles';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Search />
    </Container>
  );
};
