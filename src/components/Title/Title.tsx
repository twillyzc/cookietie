import React, { ReactNode } from 'react';

import { Container } from './Title.styles';

type Props = {
  children: ReactNode;
};

export const Title = ({ children }: Props) => <Container>{children}</Container>;
