import * as ShelfAddRemoveAPIUtil from '../util/shelf_add_remove_util';
import { removeBookFromBookshelf, addBookToBookshelf } from './bookshelf_actions';



export const addBookToShelf = (dispatch) => (shelf_membership) => {
  ShelfAddRemoveAPIUtil.addBookToShelf(shelf_membership).then(
  );
};

export const removeBookFromShelf = (dispatch) => (shelf_membership) => {
  ShelfAddRemoveAPIUtil.addBookToShelf(shelf_membership).then(
  );
};
