import React from 'react';
import { Container, Wrapper, Image } from './ListItem.styles';

export const ListItem: React.FC = ({ data, style, index }: any) => {
  const { baseUri, items, isItemLoaded } = data;

  if (!isItemLoaded(index)) {
    return <div style={style}>Loading...</div>;
  }

  return (
    <Container style={style}>
      <Wrapper>
        <Image src={`${baseUri + items[index].image}`} />
        {items[index].title}
      </Wrapper>
    </Container>
  );
};
