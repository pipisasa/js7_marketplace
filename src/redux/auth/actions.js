import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED
} from './constants';
import Axios from 'axios';

export const loginUser = ({ email, password }, cb=()=>{})=> (dispatch)=>{
  dispatch({
    type: LOGIN_USER
  });
  Axios.post(
    process.env.REACT_APP_AUTH_URL+"/api/auth/login",
    {
      email,
      password
    }
  )
    .then(({ data: { token } })=>{
      localStorage.setItem("user", JSON.stringify({token}));
      cb();
      dispatch({
        type: LOGIN_USER_SUCCESS
      });
    })
    .catch(err=>{
      dispatch({
        type: LOGIN_USER_FAILED,
        payload: err.response.data
      })
    })
}


export const registerUser = ({ email, password }, cb=()=>{})=> (dispatch)=>{
  dispatch({
    type: REGISTER_USER
  });
  Axios.post(
    process.env.REACT_APP_AUTH_URL+"/api/auth/register",
    {
      email,
      password
    }
  )
    .then(()=>{
      cb();
      dispatch({
        type: REGISTER_USER_SUCCESS
      });
    })
    .catch(err=>dispatch({
      type: REGISTER_USER_FAILED,
      payload: err.response.data
    }))
}