import Axios from 'axios';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED
} from './constants';

export const fetchData = ()=>(dispatch)=>{
  dispatch({
    type: FETCH_DATA
  });
  Axios.get(process.env.REACT_APP_API_URL+"/products")
    .then(({data})=>{
      // console.log(data);
      dispatch(fetchDataSuccess(data));
    })
    .catch(err=>{
      dispatch(fetchDataFailed(err));
    })
};

export const fetchDataSuccess = (data)=>({
  type: FETCH_DATA_SUCCESS,
  payload: data
});
export const fetchDataFailed = (err)=>({
  type: FETCH_DATA_FAILED,
  payload: err
});

export const addProduct = (product)=>(dispatch)=>{
  Axios.post(
    process.env.REACT_APP_API_URL+"/products",
    product
  ).then(()=>{
    dispatch( fetchData() );
  }).catch(err=>{
    dispatch( fetchDataFailed(err) )
  });
}


export const editProduct = (product, cb=()=>{})=>(dispatch)=>{
  Axios.patch(
    process.env.REACT_APP_API_URL+"/products/"+product.id,
    product
  ).then(()=>{
    dispatch( fetchData() );
    cb();
  }).catch(err=>{
    dispatch( fetchDataFailed(err) )
  });
}

export const deleteProduct = (id, cb=()=>{})=>(dispatch)=>{
  Axios.delete(
    process.env.REACT_APP_API_URL+"/products/"+id,
  ).then(()=>{
    dispatch( fetchData() );
    cb();
  }).catch(err=>{
    dispatch( fetchDataFailed(err) )
  });
}