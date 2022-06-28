import * as ActionTypes from "./ActionTypes";

export const Dishes = (
  state = {
    isLoading: true,
    errMess: null,
    dishes: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.displayDishes:
        return { ...state, isLoading: false, errMess: null, dishes: action.payload };
    case ActionTypes.failedDishes:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        dishes: [],
      };
    case ActionTypes.loadDishes:
      return { ...state, isLoading: true, errMess: null, dishes: [] };
    default:
      return state;
  }
};
