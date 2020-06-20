import React from 'react';
import { Image, Container, Wrapper } from './ListItem.styles';

export const ListItem: React.FC = ({ data, style, index }: any) => {
  const { baseUri, items, isItemLoaded } = data;

  if (!isItemLoaded(index)) {
    return <div style={style}>Loading...</div>;
  }

  return (
    <Container style={style}>
      <Wrapper to="/">
        <Image src={`${baseUri + items[index].id}-90x90.jpg`} alt="" />
        {items[index].title}
      </Wrapper>
    </Container>
  );
};
