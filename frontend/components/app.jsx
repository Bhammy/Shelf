import React from 'react';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import ErrorsContainer from './errors/errors_container';
import NavContainer from './nav/nav_container';
import BooksContainer from './books/books_container';
import BookshelfContainer from './bookshelves/bookshelves_container';
import BookSearchContainer from './search/book_search_container';
import UserShowContainer from './users/user_show_container';
import Footer from './footer/footer';
import { Route, Link, Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';

//primarily for rendering routes

const App = () => {

  return (
    <div className="app-container">
      <nav>
        <AuthRoute exact path="/" component={ LoginContainer } />
        <ProtectedRoute path="/" component={ BookSearchContainer } />
        <ProtectedRoute path="/" component={ NavContainer } />
      </nav>
      <section className="main-content-container">
        <div className="main-content-left">
          <div className="main-content-left-inner">
          </div>
        </div>
        <section className= "main-content" >
          <Route path="/" component={ ErrorsContainer } />
          <ProtectedRoute path="/books" component={ BooksContainer } />
          <Switch>
            <ProtectedRoute path="/users/:userId/bookshelves" component={ BookshelfContainer } />
            <ProtectedRoute exact path="/users/:userId" component={ UserShowContainer } />
          </Switch>
          <AuthRoute exact path="/" component={ SignupContainer } />
        </section>
        <div className="main-content-right">
          <div className="main-content-right-inner">
          </div>
        </div>
      </section>
      <footer className = "footer" >
        <Footer />
      </footer>
    </div>
  );
};

export default App;
