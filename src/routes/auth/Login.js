import { 
  Button, 
  Container, 
  FormGroup, 
  Grid, 
  makeStyles, 
  TextField,
  Link, Card, CardContent
} from '@material-ui/core'
import React from 'react';
import { Formik } from 'formik';

import myValidatior from 'validator';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions';

const useStyles = makeStyles(()=>({
  btnSubmit: {
    width: "100%",
    margin: "20px 0"
  },
  inp: {
    margin: "10px 0"
  },
  signupLink:{
    display: "block",
    textAlign: "end"
  },
  formWrapper:{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center"
  }
}))

export default function Login() {
  
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, loading } = useSelector(state=>state.auth);

  const LoginForm = ({
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    handleSubmit,
    isSubmitting,
  })=>(
    <form onSubmit={handleSubmit}>
      <h1>Войти</h1>
      {error && (
        <h4 style={{color: "red"}}>{error.message}</h4>
      )}
      <FormGroup>
        <TextField
          label="Введите email"
          error={!!errors.email && touched.email}
          className={classes.inp}
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          helperText={(!!errors.email && touched.email) && errors.email}
          placeholder="demo@demo.com"
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Введите пароль"
          error={!!errors.password && touched.password}
          className={classes.inp}
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          helperText={(!!errors.password && touched.password) && errors.password}
        />
      </FormGroup>
      <Link onClick={()=>history.replace("/auth/forgot-password")}>
        Забыли пароль?
      </Link>
      <Button className={classes.btnSubmit} variant="contained" color="primary" type="submit" disabled={loading}>
        Отправить
      </Button>
      <Link className={classes.signupLink} onClick={()=>history.replace("/auth/register")}>
        Нет аккаунта?
      </Link>

    </form>
  );

  const validator = (values)=>{
    const errors = {};
    if(!values.email.trim()){
      errors.email = "Это поле обязательно!"
    }else if(!myValidatior.isEmail(values.email)){
      errors.email = "Не правильный email!"
    }
    if(!values.password){
      errors.password = "Это поле обязательно!"
    }else if(values.password.length < 6){
      errors.password = "Минимальная длина Пароля 6 символов";
    }
    return errors;
  }

  const handleFormSubmit = ( values, helpers )=>{
    console.log(values);
    dispatch(loginUser(values, ()=>{
      history.replace("/");
    }))
  }

  // if(isAuth){
  //   return <Redirect to="/"/>
  // }

  return (
    <div style={{backgroundColor: "#c7c7c7"}}>
      <Container maxWidth="md">
        <Grid className={classes.formWrapper} container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardContent>
                <Formik
                  initialValues={{ email: "", password:"" }}
                  validate={validator}
                  onSubmit={handleFormSubmit}
                >
                  {LoginForm}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}