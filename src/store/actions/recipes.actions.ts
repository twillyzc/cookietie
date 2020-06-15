import {
  RecipesRequestAction,
  RecipesSuccessAction,
  RecipesFetchSuccess,
  RecipesMoreRequestAction,
  RecipesMoreSuccessAction,
} from 'store/types/recipes.types';

export const RECIPES_DATA_REQUEST = 'RECIPES_DATA_REQUEST';
export const RECIPES_DATA_SUCCESS = 'RECIPES_DATA_SUCCESS';
export const RECIPES_MORE_DATA_REQUEST = 'RECIPES_MORE_DATA_REQUEST';
export const RECIPES_MORE_DATA_SUCCESS = 'RECIPES_MORE_DATA_SUCCESS';

export const recipesRequest = (inputValue: string): RecipesRequestAction => ({
  type: RECIPES_DATA_REQUEST,
  payload: {
    inputValue,
  },
});

export const recipesSuccess = (payload: RecipesFetchSuccess): RecipesSuccessAction => ({
  type: RECIPES_DATA_SUCCESS,
  payload,
});

export const recipesMoreRequest = (inputValue: string, offset: number): RecipesMoreRequestAction => ({
  type: RECIPES_MORE_DATA_REQUEST,
  payload: {
    inputValue,
    offset,
  },
});

export const recipesMoreSuccess = (payload: RecipesFetchSuccess): RecipesMoreSuccessAction => ({
  type: RECIPES_MORE_DATA_SUCCESS,
  payload,
});
