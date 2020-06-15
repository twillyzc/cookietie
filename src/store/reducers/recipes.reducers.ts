import { RECIPES_DATA_SUCCESS, RECIPES_MORE_DATA_SUCCESS } from 'store/actions/recipes.actions';
import {
  RecipesSuccessAction,
  RecipesState,
  RecipesActionTypes,
  RecipesMoreSuccessAction,
} from 'store/types/recipes.types';

const defaultState: RecipesState = {
  items: [],
  totalResults: 0,
};

const setRecipes = (state: RecipesState, action: RecipesSuccessAction) => ({
  ...state,
  items: action.payload.results,
  totalResults: action.payload.totalResults,
});

const setMoreRecipes = (state: RecipesState, action: RecipesMoreSuccessAction) => ({
  ...state,
  items: [...state.items, ...action.payload.results],
  totalResults: action.payload.totalResults,
});

export const recipesReducer = (state = defaultState, action: RecipesActionTypes) => {
  switch (action.type) {
    case RECIPES_DATA_SUCCESS:
      return setRecipes(state, action);
    case RECIPES_MORE_DATA_SUCCESS:
      return setMoreRecipes(state, action);
    default:
      return state;
  }
};
