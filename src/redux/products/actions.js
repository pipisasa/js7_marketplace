import Axios from 'axios';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED
} from './constants';

export const fetchData = (page=1)=>(dispatch)=>{
  dispatch({
    type: FETCH_DATA
  });
  Axios.get(process.env.REACT_APP_API_URL+`/products?_limit=2&_page=${page}`)
    .then(({data, headers})=>{
      // console.log(data);
      console.log(headers);
      const totalCount = headers["x-total-count"] || data.length;
      dispatch(fetchDataSuccess(data, parseInt(totalCount)));
    })
    .catch(err=>{
      dispatch(fetchDataFailed(err));
    })
};

export const fetchDataSuccess = (data, total)=>({
  type: FETCH_DATA_SUCCESS,
  payload: {data, total}
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