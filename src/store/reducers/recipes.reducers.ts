import { RecipesSuccessAction, RecipesState, RecipesActionTypes } from 'store/types/recipes.types';
import { RECIPES_DATA_SUCCESS } from 'store/actions/recipes.actions';

const defaultState: RecipesState = {
  items: [],
};

const setRecipes = (state: RecipesState, action: RecipesSuccessAction) => ({
  ...state,
  items: action.payload.results,
});

export const recipesReducer = (state = defaultState, action: RecipesActionTypes) => {
  switch (action.type) {
    case RECIPES_DATA_SUCCESS:
      return setRecipes(state, action);
    default:
      return state;
  }
};
