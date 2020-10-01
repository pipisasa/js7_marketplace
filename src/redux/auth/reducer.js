import { isUserAuth } from "../../routes";
import { 
  LOGIN_USER, 
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED, 
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from "./constants";

const INIT_STATE = {
  isAuth: isUserAuth(),
  loading: false,
  error: null
};

const AuthReducer = (state=INIT_STATE, action)=>{
  switch(action.type){
    case LOGIN_USER:
    case REGISTER_USER:
      return {...state, loading:true};
    
    case LOGIN_USER_SUCCESS:
      return {...state, loading: false, error: null, isAuth: true};
    
    case REGISTER_USER_SUCCESS:
      return {...state, loading: false, err: null};
    
    case LOGIN_USER_FAILED:
    case REGISTER_USER_FAILED:
      return {...state, isAuth: false, loading: false, error: action.payload};

    default: return state;
  }
};

export default AuthReducer;