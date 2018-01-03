import React from 'react';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import ErrorsContainer from './errors/errors_container';
import { Route, Link } from 'react-router-dom';

//primarily for rendering routes

const App = () => {

  return (
    <div>
      <nav>
        <h1> ]shelf[ </h1>
        <Route exact path="/" component={ LoginContainer } />
      </nav>
      <section className = "main-content" >
        <Route path="/" component={ ErrorsContainer } />
        <Route exact path="/" component={ SignupContainer } />
      </section>
    </div>
  );
};

export default App;
