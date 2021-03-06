import { RECEIVE_BOOK, RECEIVE_BOOKS } from '../actions/book_actions';
import merge from 'lodash/merge';

const booksReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      return merge({}, state, { [action.book.id]: action.book });
    default:
      return state;
  }
};

export default booksReducer;
