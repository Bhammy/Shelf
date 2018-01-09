import React from 'react';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import ErrorsContainer from './errors/errors_container';
import NavContainer from './nav/nav_container';
import BooksContainer from './books/books_container';
import BookshelfContainer from './bookshelves/bookshelves_container';
import Footer from './footer/footer';
import { Route, Link } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';

//primarily for rendering routes

const App = () => {

  return (
    <div className="app-container">
      <nav>
        <AuthRoute exact path="/" component={ LoginContainer } />
        <ProtectedRoute path="/" component={ NavContainer } />
      </nav>
      <section className = "main-content" >
        <Route path="/" component={ ErrorsContainer } />
        <ProtectedRoute path="/books" component={ BooksContainer } />
        <ProtectedRoute path="/users/:userId/bookshelves" component={ BookshelfContainer } />
        <AuthRoute exact path="/" component={ SignupContainer } />
      </section>
      <footer className = "footer" >
        <Footer />
      </footer>
    </div>
  );
};

export default App;
