import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content, Nav, Logo } from './Header.styles';

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Nav>
          <ul>
            <li>
              <Link to="/recipes">New recipes</Link>
            </li>
            <li>
              <Link to="/">Categories</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </Nav>
        <Logo>
          <span>HOT</span>Kitchen
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link to="/">Register</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/">Search</Link>
            </li>
          </ul>
        </Nav>
      </Content>
    </Wrapper>
  );
};
