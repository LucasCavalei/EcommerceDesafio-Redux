import { CREATE_USER_SUCCESS,CREATE_USER_ERROR,LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from './actionTypes.js';

const axios = require('axios');


export const  createUser = (userInfo) =>(dispatch)=> {
axios.post('/user/signup', userInfo)
  .then(response=>{
    console.log("sou SIGNUPuser response cart vindo do controller",response.data)
      dispatch({
          type: CREATE_USER_SUCCESS,
           payload: response.data
          });
    })
    .catch(error=>{
     console.log("sou user ERROR cart vindo do controller",error)
       dispatch({
            type: CREATE_USER_ERROR,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    })
}

export const  loginUser = (userInfo) =>(dispatch)=> {
  axios.post('/user/login', userInfo)
    .then(response=>{
    console.log("sou LOGINuser response cart vindo do controller",response.data)

      dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: response.data
    })
    })
    .catch(error=>{
            dispatch({
        type: LOGIN_USER_ERROR,
        payload: error.response && error.response.data.message        })
 })
}

