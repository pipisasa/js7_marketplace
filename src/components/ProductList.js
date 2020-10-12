import { Grid } from '@material-ui/core'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/products/actions';
import ProductCard from './ProductCard'
import {
  Pagination, 
  PaginationItem
} from '@material-ui/lab';
import { Link, useLocation } from 'react-router-dom';

export default function ProductList() {
  const {data, loading, error, totalCount} = useSelector( state=>state.products );
  
  const dispatch = useDispatch();

  const location = useLocation();

  //? Use Memo
  const page = useMemo(()=>{
    const query = new URLSearchParams(location.search);
    return parseInt(query.get("_page") || 1);
  }, [location.search]);

  useEffect(()=>{
    dispatch( fetchData(page) );
  },[dispatch, page])

  if(loading){
    return <h1>Fetch data...</h1>
  }
  if(error){
    return <h1>Error: {error.message}</h1>
  }

  return (
    <>
    <Grid container>
      {data.map(( item )=>(
        <Grid key={"product-card-"+item.id} item xs={12} sm={6} md={4}>
          <ProductCard data={item}/>
        </Grid>
      ))}
    </Grid>
    <Grid container justify="center">
      <Pagination 
        count={Math.ceil(totalCount/2)}
        page={page}
        renderItem={(item)=>(
          <PaginationItem
            component={Link}
            to={`/?_page=${item.page}`}
            {...item}
          />
        )}
      />
    </Grid>
    </>
  )
}
