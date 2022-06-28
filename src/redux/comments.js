import * as ActionTypes from "./ActionTypes";

export const Comments = (
  state = {
    errMess: null,
    comments: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.displayComments:
        return { ...state, isLoading: false, errMess: null, comments: action.payload };
        case ActionTypes.failedComments:
            return {
              ...state,
              isLoading: false,
              errMess: action.payload,
              comments: [],
            };

    case ActionTypes.displayComment:
      var comment = action.payload;
    //   console.log("Comment: ", comment);
      return {...state,comments:state.comments.concat(comment)};
    default:
      return state;
  }
};
