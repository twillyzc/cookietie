import { fork } from 'redux-saga/effects';

import { recipesWatcher } from 'store/sagas/recipes.sagas';

export function* rootSaga(): Generator {
  yield fork(recipesWatcher);
}
