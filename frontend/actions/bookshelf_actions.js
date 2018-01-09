import * as BookshelfAPIUtil from '../util/bookshelf_api_util';
import { receiveErrors, RECEIVE_ERRORS } from './session_actions';

export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";

export const RECEIVE_BOOKSHELVES = "RECEIVE_BOOKSHELVES";

export const REMOVE_BOOKSHELF = "REMOVE_BOOKSHELF";

export const REMOVE_BOOK_FROM_BOOKSHELF = "REMOVE_BOOK_FROM_BOOKSHELF";

export const ADD_BOOK_TO_BOOKSHELF = "ADD_BOOK_TO_BOOKSHELF";

export const receiveBookshelf = (bookshelf) => ({
  type: RECEIVE_BOOKSHELF,
  bookshelf
});

export const receiveBookshelves = (bookshelves) => ({
  type: RECEIVE_BOOKSHELVES,
  bookshelves
});

export const removeBookshelf = (bookshelf) => ({
  type: REMOVE_BOOKSHELF,
  bookshelfId: bookshelf.id
});

export const addBookToBookshelf = (bookshelfId, book) => ({
  type: ADD_BOOK_TO_BOOKSHELF,
  bookshelfId,
  book
});

export const removeBookFromBookshelf = (bookshelfId, bookId) => ({
  type: REMOVE_BOOK_FROM_BOOKSHELF,
  bookshelfId,
  bookId
});

export const requestBookshelves = (userId) => (dispatch) => {
  return BookshelfAPIUtil.fetchBookshelves(userId).then( (shelves) => {
    return dispatch(receiveBookshelves(shelves));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};

export const requestBookshelf = (shelfId) => (dispatch) => {
  return BookshelfAPIUtil.fetchBookshelf(shelfId).then( (shelf) => {
    return dispatch(receiveBookshelf(shelf));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};

export const createBookshelf = (shelf) => (dispatch) => {
  return BookshelfAPIUtil.createBookshelf(shelf).then( (shelf) => {
    dispatch(receiveBookshelf(shelf));
    return shelf;
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};

export const updateBookshelf = (shelf) => (dispatch) => {
  return BookshelfAPIUtil.updateBookshelf(shelf).then( (shelf) => {
    dispatch(receiveBookshelf(shelf));
    return shelf;
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};

export const deleteBookshelf = (shelfId) => (dispatch) => {
  return BookshelfAPIUtil.deleteBookshelf(shelfId).then( (shelf) => {
    dispatch(removeBookshelf(shelf));
    return shelf;
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};
