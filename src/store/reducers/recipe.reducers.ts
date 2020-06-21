import { RECIPE_DATA_SUCCESS } from 'store/actions/recipe.actions';

const defaultState = {
  item: {},
};

const setRecipe = (state: any, action: any) => ({
  ...state,
  item: action.payload,
});

export const recipeReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case RECIPE_DATA_SUCCESS:
      return setRecipe(state, action);
    default:
      return defaultState;
  }
};
