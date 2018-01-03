import React from 'react';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import ErrorsContainer from './errors/errors_container';
import { Route, Link } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';

//primarily for rendering routes

const App = () => {

  return (
    <div>
      <nav>
        <h1> ]shelf[ </h1>
        <AuthRoute exact path="/" component={ LoginContainer } />
      </nav>
      <section className = "main-content" >
        <Route path="/" component={ ErrorsContainer } />
        <AuthRoute exact path="/" component={ SignupContainer } />
      </section>
    </div>
  );
};

export default App;
