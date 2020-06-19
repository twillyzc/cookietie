import React from 'react';
import { Image } from './ListItem.styles';

export const ListItem = ({ data, style, index }: any) => {
  const { baseUri, items, isItemLoaded } = data;
  if (!isItemLoaded(index)) {
    return <div style={style}>Loading...</div>;
  }
  return (
    <div style={style}>
      <Image src={`${baseUri + items[index].id}-90x90.jpg`} alt="" />
      {items[index].title}
    </div>
  );
};
