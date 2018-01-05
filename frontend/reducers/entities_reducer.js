import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import bookshelfReducer from './bookshelf_reducer';

const entitiesReducer = combineReducers({
  books: booksReducer,
  bookshelves: bookshelfReducer,
});

export default entitiesReducer;
