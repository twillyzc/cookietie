import { call, put, takeLatest } from 'redux-saga/effects';

import { API_KEY, API_URL, fetchUrl } from 'core/api';
import {
  RecipesRequestAction,
  RecipesMoreRequestAction,
  RecipesFetchSuccess,
} from 'store/types/recipes.types';
import {
  RECIPES_DATA_REQUEST,
  recipesSuccess,
  RECIPES_MORE_DATA_REQUEST,
  recipesMoreSuccess,
} from 'store/actions/recipes.actions';

function* fetchRecipes(action: RecipesRequestAction) {
  const recipes: RecipesFetchSuccess = yield call(
    fetchUrl,
    `${API_URL}/recipes/search?query=${action.payload.inputValue}&number=100&apiKey=${API_KEY}`
  );

  yield put(recipesSuccess(recipes, action.meta));
}

function* fetchMoreRecipes(action: RecipesMoreRequestAction) {
  const recipes: RecipesFetchSuccess = yield call(
    fetchUrl,
    `${API_URL}/recipes/search?query=${action.payload.inputValue}&number=100&offset=${action.payload.offset}&apiKey=${API_KEY}`
  );

  yield put(recipesMoreSuccess(recipes, action.meta));
}

export function* recipesWatcher(): Generator {
  yield takeLatest(RECIPES_MORE_DATA_REQUEST, fetchMoreRecipes);
  yield takeLatest(RECIPES_DATA_REQUEST, fetchRecipes);
}
