import { call, put, takeLatest } from 'redux-saga/effects';

import { API_KEY, API_URL, fetchUrl } from 'core/api';
import {
  RECIPE_DATA_REQUEST,
  recipeSuccess,
} from 'store/actions/recipe.actions';

function* fetchRecipe(action: any) {
  const recipe = yield call(
    fetchUrl,
    `${API_URL}/recipes/${action.payload.id}/information?apiKey=${API_KEY}`
  );
  console.log(recipe);

  yield put(recipeSuccess(recipe, action.meta));
}

export function* recipeWatcher(): Generator {
  yield takeLatest(RECIPE_DATA_REQUEST, fetchRecipe);
}
