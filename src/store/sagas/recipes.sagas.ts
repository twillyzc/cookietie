import { call, put, takeLatest } from 'redux-saga/effects';
import { API_KEY, API_URL, fetchUrl } from 'core/api';
import {
  RECIPES_DATA_SUCCESS,
  RECIPES_DATA_REQUEST,
} from 'store/actions/recipes.actions';

function* fetchRecipes() {
  const recipes = yield call(
    fetchUrl,
    `${API_URL}/recipes/search?query=${'pizza'}&count=10&apiKey=${API_KEY}`
  );
  yield put({ type: RECIPES_DATA_SUCCESS, payload: recipes.results });
}

export function* recipesWatcher() {
  yield takeLatest(RECIPES_DATA_REQUEST, fetchRecipes);
}
