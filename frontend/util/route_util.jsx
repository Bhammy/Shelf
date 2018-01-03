import React from 'react';
import { Route , withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//this file defines auth and protected routes

//this component renders only if *logged out*, otherwise redirects to root url
const Auth = ({component: Component, path, loggedIn, currentUser, exact}) => {
  return <Route exact={exact} path={ path } render={(props) => {
      if (!loggedIn) {
        return <Component {...props}/>
      } else {
        return <Redirect to={`/users/${currentUser.id}`} />
      }
    }
  }/>
}

//this component renders only if *logged in*, otherwise redirects
const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={ path } render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
)

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
})

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
