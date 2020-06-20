import React, { ReactNode } from 'react';

import { Container } from './Title.styles';

type Props = {
  children: ReactNode;
};

export const Title: React.FC<Props> = ({ children }) => (
  <Container>{children}</Container>
);
