import { RECEIVE_BOOK, RECEIVE_BOOKS } from '../actions/book_actions';
import { merge } from 'lodash';

const booksReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      newState = merge({}, state, { [action.book.id]: action.book });
      return newState;
    default:
      return state;
  }
};

export default booksReducer;
