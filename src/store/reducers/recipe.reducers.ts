import { RECIPE_DATA_SUCCESS } from 'store/actions/recipe.actions';

const defaultState = {
  id: 0,
  title: '',
  image: '',
  instructions: '',
  readyInMinutes: 0,
  serving: 0,
  summary: '',
};

const setRecipe = (state: any, { payload }: any) => ({
  ...state,
  id: payload.id,
  title: payload.title,
  image: payload.image,
  instructions: payload.instructions,
  readyInMinutes: payload.readyInMinutes,
  serving: payload.serving,
  summary: payload.summary,
});

export const recipeReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case RECIPE_DATA_SUCCESS:
      return setRecipe(state, action);
    default:
      return defaultState;
  }
};
