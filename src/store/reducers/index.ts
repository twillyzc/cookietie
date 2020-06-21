import { combineReducers } from 'redux';

import { recipesReducer } from 'store/reducers/recipes.reducers';
import { recipeReducer } from 'store/reducers/recipe.reducers';

export const rootReducer = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
