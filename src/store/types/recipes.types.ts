import { RECIPES_GET_DATA_SUCCESS } from 'store/actions/recipes.actions';

export interface RecipeItem {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  sourceUrl: string;
}

export interface Recipes {
  results: RecipeItem[];
  totalResults: number;
  baseUri: string;
}

export interface recipesSuccessAction {
  type: typeof RECIPES_GET_DATA_SUCCESS;
  recipes: Recipes;
}

export type RecipesState = Recipes;

export type RecipesActionTypes = recipesSuccessAction;
