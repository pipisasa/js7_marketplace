import React from 'react'
// import Button from '@material-ui/core/Button';
import {
  Container, 
  Grid,
} from '@material-ui/core';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Grid container justify="space-between" >
        {Array(10).fill(null).map(( _, i )=>(
          <Grid key={"product-card-"+i} item xs={12} sm={6} md={4}>
            <ProductCard/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
