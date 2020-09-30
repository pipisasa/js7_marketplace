import React from 'react'
// import Button from '@material-ui/core/Button';
import {
  Container,
} from '@material-ui/core';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <Container maxWidth="md">
      <ProductList/>
    </Container>
  )
}
