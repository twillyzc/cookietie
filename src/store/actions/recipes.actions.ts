export const RECIPES_DATA_REQUEST = 'RECIPES_DATA_REQUEST';
export const RECIPES_DATA_SUCCESS = 'RECIPES_DATA_SUCCESS';

export const recipesRequest = (input: string) => ({
  type: RECIPES_DATA_REQUEST,
  payload: { input },
});

export const recipesSuccess = (payload: object) => ({
  type: RECIPES_DATA_SUCCESS,
  payload,
});
