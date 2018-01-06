import { RECEIVE_BOOKSHELF, REMOVE_BOOKSHELF } from '../actions/bookshelf_actions';
import { RECEIVE_BOOK } from '../actions/bookshelf_actions';
import { merge } from 'lodash';

let initialState = {
  currentBookshelf: null,
  currentBook: null,
};

const uiReducer = (state=initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_BOOKSHELF:
      newState = merge({}, state, { currentBookshelf: action.bookshelf });
      return newState;
    case REMOVE_BOOKSHELF:
      newState = merge({}, state, { currentBookshelf: null});
      return newState;
    case RECEIVE_BOOK:
      newState = merge({}, state, { currentBook: action.book.id });
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
