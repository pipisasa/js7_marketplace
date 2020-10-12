import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED
} from './constants';

const INIT_STATE = {
  data: [],
  loading: false,
  error: null,
  totalCount: 0
};

const ProductsReducer = (state = INIT_STATE, action)=>{
  switch(action.type){
    case FETCH_DATA:
      return {...state, loading: true};
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        totalCount: action.payload.total,
        loading: false,
        error: null
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload
      };
    default: return state;
  }
}

export default ProductsReducer;