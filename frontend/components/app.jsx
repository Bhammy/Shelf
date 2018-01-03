import React from 'react';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import { Route, Link } from 'react-router-dom';

//primarily for rendering routes

const App = () => {
  return (
    <div className = "all-content">
      <nav>
        <h1> ]shelf[ </h1>
        Login: <Route exact path="/" component={ LoginContainer } />
      </nav>
      Signup:<Route exact path="/" component={ SignupContainer } />
    </div>
  );
};

export default App;
