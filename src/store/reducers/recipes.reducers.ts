import { RECIPES_GET_DATA_SUCCESS } from 'store/actions/recipes.actions';
import { RecipesState, recipesSuccessAction } from 'store/types/recipes.types';

const defaultState: RecipesState = {
  results: [],
  totalResults: 0,
  baseUri: '',
};

const setRecipes = (
  state = defaultState,
  { results, totalResults, baseUri }: RecipesState
) => {
  return {
    ...state,
    items: [...results],
    totalResults,
    baseUri,
  };
};

export const recipesReducer = (
  state: RecipesState,
  action: recipesSuccessAction
) => {
  switch (action.type) {
    case RECIPES_GET_DATA_SUCCESS:
      return setRecipes(state, action.recipes);
    default:
      return state;
  }
};
