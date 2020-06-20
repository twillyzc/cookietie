import React, { ReactNode } from 'react';

import { Container, Wrapper } from './Layout.styles';

type Props = {
  children: ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => <Container>{children}</Container>;

export const Content: React.FC<Props> = ({ children }) => <Wrapper>{children}</Wrapper>;
