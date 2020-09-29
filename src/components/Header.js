import { Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Header() {
  const history = useHistory();
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item>
          <Button 
            onClick={()=>history.replace("/")}>
            HOME
          </Button>
        </Grid>

        <Grid item>
          <Button 
            onClick={()=>history.replace("/about-us")}>
            ABOUT US
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
