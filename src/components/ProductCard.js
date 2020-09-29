import React from 'react'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  makeStyles,
  Typography
} from '@material-ui/core';
import {
  MoreVert as MoreVertIcon,
  Share,
  ShoppingCart
} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain'
  },
  price:{
    marginLeft: 'auto',
  },
  card: {
    margin: '10px'
  }
}));


export default function ProductCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar>U</Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Iphone XS"
        subheader="Elon Mask"
      />
      <CardMedia
        className={classes.media}
        image="https://lh3.googleusercontent.com/proxy/UY4sIkoMlyl_br3mgPa30YSKHvQ247l1DckoYQRvq_Ke6n49-vQlB6Ff_8C1E9Um2nuBZhjqBJDu2OAlSKE0WyGsBqyAIWSMDmy0G--VDP5M52EIjrSvs3hw9N1NBOgNw-f_rw"
        title="Ihpone XS"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to card">
          <ShoppingCart />
        </IconButton>

        <IconButton aria-label="share">
          <Share />
        </IconButton>

        <Button className={classes.price} variant="outlined" color="primary">
          5000
        </Button>
      </CardActions>
    </Card>
  )
}
