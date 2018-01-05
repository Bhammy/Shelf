import * as BookAPIUtil from '../util/books_api_util';
import { receiveErrors, RECEIVE_ERRORS } from './session_actions';

export const RECEIVE_BOOK = "RECEIVE_BOOK";

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";

export const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book
});

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books
});

export const requestBook = (bookId) => (dispatch) => {
  return BookAPIUtil.fetchBook(bookId).then( (book) => {
    return dispatch(receiveBook(book));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};

export const requestBooks = () => (dispatch) => {
  return BookAPIUtil.fetchBooks().then( (books) => {
    return dispatch(receiveBooks(books));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};
