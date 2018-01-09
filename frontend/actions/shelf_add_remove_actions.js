import * as ShelfAddRemoveAPIUtil from '../util/shelf_add_remove_util';
import { receiveBookshelf, requestBookshelves } from './bookshelf_actions';
import { receiveErrors } from './session_actions';

export const addBookToShelf = (shelf_membership) => (dispatch) => {
  return ShelfAddRemoveAPIUtil.addBookToShelf(shelf_membership).then( (bookshelf) => {
    return dispatch(requestBookshelves(bookshelf.user_id));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};

export const removeBookFromShelf = (shelf_membership) => (dispatch) => {
  return ShelfAddRemoveAPIUtil.removeBookFromShelf(shelf_membership).then( (bookshelf) => {
    return dispatch(requestBookshelves(bookshelf.user_id));
  }, (errs) => {
    return dispatch(receiveErrors(errs));
  });
};
