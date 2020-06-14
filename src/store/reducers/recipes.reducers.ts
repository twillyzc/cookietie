import { RECIPES_DATA_SUCCESS } from 'store/actions/recipes.actions';

const initialState = {
  items: [],
};

export const recipesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case RECIPES_DATA_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
