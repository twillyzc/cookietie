import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { recipesRequest } from 'store/actions/recipes.actions';
import { RecipeResult } from 'store/types/recipes.types';

export const Main = () => {
  const dispatch = useDispatch();

  const getRecipes = () => dispatch(recipesRequest('pasta'));

  const { items }: { items: [RecipeResult] } = useSelector((state: RootState) => state.recipes);

  const isThereAnyItems = items.length < 1 ? false : true;

  return (
    <>
      <button onClick={getRecipes}>aaaaaaa</button>
      {isThereAnyItems && <RecipesList recipes={items} />}
    </>
  );
};
