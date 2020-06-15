import { combineReducers } from 'redux';

import { recipesReducer } from 'store/reducers/recipes.reducers';

export const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
