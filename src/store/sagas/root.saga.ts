import { fork } from 'redux-saga/effects';

import { recipesWatcher } from 'store/sagas/recipes.sagas';
import { recipeWatcher } from './recipe.sagas';

export function* rootSaga(): Generator {
  yield fork(recipesWatcher);
  yield fork(recipeWatcher);
}
