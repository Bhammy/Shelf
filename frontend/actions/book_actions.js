import * as BookAPIUtil from '../util/books_api_util';
import { receiveErrors, RECEIVE_ERRORS } from '../session_actions';

export const RECEIVE_BOOK = "RECEIVE_BOOK";

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";

export const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book
});

export const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  book
});

export const requestBook = (bookId) => (dispatch) => {
  BooksAPIUtil.fetchBook(bookId).then( (book) => {
    return dispatch(receiveBook(book));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};

export const requestBooks = () => (dispatch) => {
  BooksAPIUtil.fetchBooks().then( (book) => {
    return dispatch(receiveBook(book));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};
