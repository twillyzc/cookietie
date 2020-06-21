import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Wrapper, Image } from './ListItem.styles';

export const ListItem: React.FC = ({ data, style, index }: any) => {
  const { baseUri, items, isItemLoaded } = data;

  const item = items[index];

  if (!isItemLoaded(index)) {
    return <div style={style}>Loading...</div>;
  }

  return (
    <Container style={style}>
      <Wrapper>
        <Image src={`${baseUri + item.image}`} />
        <Link to={`/recipe/${item.id}`}>{item.title}</Link>
      </Wrapper>
    </Container>
  );
};
