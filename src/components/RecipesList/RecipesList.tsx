import React from 'react';
import { FixedSizeList as List } from 'react-window';

export const RecipesList = ({ recipes }: any) => {
  const Item = ({ index, style }: any) => (
    <div style={style}>
      <p>{recipes[index].title}</p>
    </div>
  );
  return (
    <List height={700} itemCount={recipes.length} itemSize={65} width={400}>
      {Item}
    </List>
  );
};
