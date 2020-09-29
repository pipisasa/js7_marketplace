import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Layout from '../components/layouts/Layout';

export const getLoggedInUser = ()=>{//? return Object
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
};

export const isUserAuth = ()=>{//? return Boolean
  const user = getLoggedInUser();
  if(!user){
    return false;
  }
  return true;
};

const PrivateRoute = (props)=>{
  const {children, ...rest} = props;
  return (
    <Route 
      {...rest} 
      render={props=>{
        return isUserAuth() ? (children) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: {from: props.location}
            }}
          />
        )
      }}
    />
  )
}

//? Pages
const Home = lazy(()=>import('./Home'));
const AboutUs = lazy(()=>import('./AboutUs'));
const Admin = lazy(()=>import('./Admin'));

//? Auth pages
const Login = lazy(()=>import('./auth/Login'));
const Logout = lazy(()=>import('./auth/Logout'));
const Register = lazy(()=>import('./auth/Register'));

const Routes = ()=>{
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        
        <Switch>

          <PrivateRoute exact path="/">
            <Layout>
              <Home/>
            </Layout>
          </PrivateRoute>

          <PrivateRoute exact path="/about-us">
            <Layout>
              <AboutUs/>
            </Layout>
          </PrivateRoute>

          <PrivateRoute exact path="/admin">
            <Layout>
              <Admin/>
            </Layout>
          </PrivateRoute>

          <Route exact path="/auth/login">
            <Login/>
          </Route>

          <Route exact path="/auth/register">
            <Register/>
          </Route>

          <Route exact path="/auth/logout">
            <Logout/>
          </Route>

          <Route>
            <Layout>
              <div style={ {minHeight:"50vh"} }>
                <h1>Error: 404. Page not found</h1>
              </div>
            </Layout>
          </Route>

        </Switch>

      </Suspense>
    </BrowserRouter>
  )
}

export default Routes;

// ? <PrivateRoute>
// ?   hello
// ? </PrivateRoute>

// ? <PrivateRoute children={"Hello"}/>