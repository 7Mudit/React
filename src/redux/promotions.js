import * as ActionTypes from "./ActionTypes";

export const Promotions = (state = {
    isLoading:true,
    errMess:null,
    promotions:[]
}, action) => {
  switch (action.type) {
    case ActionTypes.displayPromotions:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };
    case ActionTypes.failedPromotions:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        promotions: [],
      };
    case ActionTypes.loadPromotions:
      return { ...state, isLoading: true, errMess: null, promotions: [] };
    default:
      return state;
  }
};
