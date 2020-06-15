import { call, put, takeLatest } from 'redux-saga/effects';
import { API_KEY, API_URL, fetchUrl } from 'core/api';
import { RECIPES_DATA_REQUEST, recipesSuccess } from 'store/actions/recipes.actions';
import { RecipesRequestAction } from 'store/types/recipes.types';

function* fetchRecipes(action: RecipesRequestAction) {
  const recipes = yield call(
    fetchUrl,
    `${API_URL}/recipes/search?query=${action.payload.inputValue}&number=100&apiKey=${API_KEY}`
  );

  yield put(recipesSuccess(recipes));
}

export function* recipesWatcher() {
  yield takeLatest(RECIPES_DATA_REQUEST, fetchRecipes);
}
