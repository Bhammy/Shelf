import { connect } from 'react-redux';
import { requestBook, requestBooks } from '../../actions/book_actions';
import { requestBookshelves } from '../../actions/bookshelf_actions';
import BooksIndex from './books_index';

const mapStateToProps = (state, ownProps) => ({
  books: Object.values(state.entities.books),
  bookshelves: Object.values(state.entities.bookshelves),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBookshelves: (userId) => dispatch(requestBookshelves(userId)),
  requestBook: (bookId) => dispatch(requestBook(bookId)),
  requestBooks: () => dispatch(requestBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksIndex);
