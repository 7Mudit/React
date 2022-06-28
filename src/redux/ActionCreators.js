
import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';

export const postComment=(dishId,rating,author,comment)=>(dispatch)=> {
    const newComment={
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
    newComment.date=new Date().toISOString()
    return fetch(baseUrl+'comments',{
        method:'POST',
        body:JSON.stringify(newComment),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'

    }).then(response=>{
        if(response.ok){
            return response
        }else{
            var error=new Error('Error'+response.status+':'+response.statusText)
            error.response=response
            throw error
        }
    },
    error=>{
        var errmess=new Error(error.message)
        throw errmess
    })
    .then(response=>response.json())
    .then(response=>dispatch(addComment(response)))
    .catch(error=>{console.log("Post Comments",error.message)
alert('Your comment should not be posted\n+error.message')})
}

export const addComment=(comment)=>({
    type:ActionTypes.displayComment,
    payload:comment
})

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading(true))
    return fetch(baseUrl+'dishes')
    .then(response=>{
        if(response.ok){
            return response
        }else{
            var error=new Error('Error'+response.status+':'+response.statusText)
            error.response=response
            throw error
        }
    },
    error=>{
        var errmess=new Error(error.message)
        throw errmess
    })
    .then(response=>response.json())
    .then(dishes=>dispatch(addDishes(dishes)))
    .catch(error=>dispatch(dishesFailed(error.message)))
}

export const dishesLoading=()=>({
    type:ActionTypes.loadDishes
})

export const dishesFailed=(errmess)=>({
    type:ActionTypes.failedDishes,
    payload:errmess
})

export const addDishes=(dishes)=>({
    type:ActionTypes.displayDishes,
    payload:dishes
})

export const fetchComments=()=>(dispatch)=>{
    return fetch(baseUrl+'comments')
    .then(response=>{
        if(response.ok){
            return response
        }else{
            var error=new Error('Error'+response.status+':'+response.statusText)
            error.response=response
            throw error
        }
    },
    error=>{
        var errmess=new Error(error.message)
        throw errmess
    })
    .then(response=>response.json())
    .then(comments=>dispatch(addComments(comments)))
    .catch(error=>dispatch(commentsFailed(error.message)))
}

export const commentsFailed=(errmess)=>({
    type:ActionTypes.failedComments,
    payload:errmess
})

export const addComments=(comments)=>({
    type:ActionTypes.displayComments,
    payload:comments
})
export const fetchPromos=()=>(dispatch)=>{
    dispatch(promosLoading(true))
    return fetch(baseUrl+'promotions')
    .then(response=>{
        if(response.ok){
            return response
        }else{
            var error=new Error('Error'+response.status+':'+response.statusText)
            error.response=response
            throw error
        }
    },
    error=>{
        var errmess=new Error(error.message)
        throw errmess
    })
    .then(response=>response.json())
    .then(promos=>dispatch(addPromos(promos)))
    .catch(error=>dispatch(promosFailed(error.message)))
}
export const promosLoading=()=>({
    type:ActionTypes.loadPromotions
})
export const promosFailed=(errmess)=>({
    type:ActionTypes.failedPromotions,
    payload:errmess
})

export const addPromos=(promos)=>({
    type:ActionTypes.displayPromotions,
    payload:promos
})


export const postFeedback = (feedback) => (dispatch) => {
    const newFeedback = {
       firstname: feedback.firstname,
       lastname: feedback.lastname,
       telnum: feedback.telnum,
       email: feedback.email,
       agree: feedback.agree,
       contactType: feedback.contactType,
       message: feedback.message
    }
     
    return fetch(baseUrl + 'feedback', {
       method: 'POST',
       body: JSON.stringify(newFeedback),
       headers: {
          'Content-Type': 'application/json'
       },
       credentials: 'same-origin'
    })
    .then(response => {
       if (response.ok) {
          return response;
       }
       else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
       }
    }, 
    error => {
       var errmess = new Error(error.message);    
       throw errmess;
    })
    .then(response => response.json())
    .then(response => { console.log("Current State is: " + JSON.stringify(response)); 
                        alert("Thank you for your feedback!<br/>" + JSON.stringify(response)); })
    .catch(error => { console.log('Post Feedback ', error.message);
                      alert('Your feedback could not be posted\nError: ' + error.message); })
 }
 export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));
    
    return fetch(baseUrl + 'leaders')
    .then(response => {
       if (response.ok) {
          return response;
       }
       else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
       }
    }, 
    error => {
       var errmess = new Error(error.message);
       throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addLeaders(promos)))
    .catch(error => dispatch(leadersFailed(error.message)));
 }
 
 export const leadersLoading = () => ({
    type: ActionTypes.loadLeaders
 });
 
 export const leadersFailed = (errmess) => ({
    type: ActionTypes.failedLeaders,
    payload: errmess
 });
 
 export const addLeaders = (leaders) => ({
    type: ActionTypes.displayLeaders,
    payload: leaders
 })