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
  meta: {
    thunk: true,
  },
});

export const recipesSuccess = (payload: RecipesFetchSuccess, meta: any): RecipesSuccessAction => ({
  type: RECIPES_DATA_SUCCESS,
  payload,
  meta,
});

export const recipesMoreRequest = (inputValue: string, offset: number): RecipesMoreRequestAction => ({
  type: RECIPES_MORE_DATA_REQUEST,
  payload: {
    inputValue,
    offset,
  },
  meta: {
    thunk: true,
  },
});

export const recipesMoreSuccess = (payload: RecipesFetchSuccess, meta: any): RecipesMoreSuccessAction => ({
  type: RECIPES_MORE_DATA_SUCCESS,
  payload,
  meta,
});
