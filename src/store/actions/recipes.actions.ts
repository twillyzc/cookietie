import { RecipesRequestAction, RecipesSuccessAction, RecipesFetchSuccess } from 'store/types/recipes.types';

export const RECIPES_DATA_REQUEST = 'RECIPES_DATA_REQUEST';
export const RECIPES_DATA_SUCCESS = 'RECIPES_DATA_SUCCESS';

export const recipesRequest = (inputValue: string): RecipesRequestAction => ({
  type: RECIPES_DATA_REQUEST,
  payload: { inputValue },
});

export const recipesSuccess = (payload: RecipesFetchSuccess): RecipesSuccessAction => ({
  type: RECIPES_DATA_SUCCESS,
  payload,
});
