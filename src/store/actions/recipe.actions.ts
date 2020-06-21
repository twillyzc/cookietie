export const RECIPE_DATA_REQUEST = 'RECIPE_DATA_REQUEST';
export const RECIPE_DATA_SUCCESS = 'RECIPE_DATA_SUCCESS';

export const recipeRequest = (id: any) => ({
  type: RECIPE_DATA_REQUEST,
  payload: { id },
  meta: {
    thunk: true,
  },
});

export const recipeSuccess = (payload: any, meta: any) => ({
  type: RECIPE_DATA_SUCCESS,
  payload,
  meta,
});
