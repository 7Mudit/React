import * as ActionTypes from './ActionTypes';

export const Leaders = (state = {
      isLoading: true,
      errMess: null,
      leaders: []
   }, action) => {
   switch(action.type) {
      case ActionTypes.displayLeaders:
         return {...state, isLoading: false, errMess: null, leaders: action.payload}; 
              
      case ActionTypes.loadLeaders:
         return {...state, isLoading: true, errMess: null, leaders: []}; 
         
      case ActionTypes.failedLeaders:
         return {...state, isLoading: false, errMess: action.payload, leaders: []}; 
        
      default:
         return state;
   }
}