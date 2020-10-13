import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import CartTable from '../components/CartTable';

const useStyles = makeStyles(()=>({
  root: {
    paddingTop: "30px",
  }
}))

export default function Cart() {

  const classes = useStyles();
  const cartItems = useSelector(state=>state.products.cart);

  return (
    <Container className={classes.root} maxWidth="sm">
      <CartTable rows={cartItems} />
    </Container>
  )
}
