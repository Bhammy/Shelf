import { RECEIVE_BOOKSHELF, RECEIVE_BOOKSHELVES, REMOVE_BOOKSHELF } from '../actions/bookshelf_actions';
import { merge } from 'lodash';

const bookshelfReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_BOOKSHELF:
      newState = merge({}, state, { [action.bookshelf.id]: action.bookshelf });
      return newState;
    case RECEIVE_BOOKSHELVES:
      return action.bookshelves;
    case REMOVE_BOOKSHELF:
      newState = merge({}, state);
      delete newState[action.bookshelfId];
      return newState;
    default:
      return state;
  }
};

export default bookshelfReducer;
