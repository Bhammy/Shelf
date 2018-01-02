import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import { login, logout, signup } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {

  let store = configureStore();

  const root = document.getElementById("root");

  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  ReactDOM.render(<Root store={ store }/>, root);
});
