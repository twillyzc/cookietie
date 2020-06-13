import React, { ReactNode } from 'react';
import { Container, Wrapper } from './Layout.styles';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <Container>{children}</Container>
);

export const Content = ({ children }: Props) => <Wrapper>{children}</Wrapper>;
