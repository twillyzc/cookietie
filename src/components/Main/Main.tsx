import React from 'react';
import { useDispatch } from 'react-redux';

import { RecipesList } from 'components/RecipesList/RecipesList';
import { recipesRequest } from 'store/actions/recipes.actions';

export const Main = () => {
  const dispatch = useDispatch();

  const getRecipes = async () => await dispatch(recipesRequest('tomato'));

  return (
    <>
      <button onClick={getRecipes}>aaaaaaa</button>
      <RecipesList />
    </>
  );
};
