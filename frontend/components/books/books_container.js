import { connect } from 'react-redux';
import { requestBook, requestBooks } from '../../actions/book_actions';
import BooksIndex from './books_index';

const mapStateToProps = (state, ownProps) => ({
  books: Object.values(state.entities.books),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBook: (bookId) => dispatch(requestBook(bookId)),
  requestBooks: () => dispatch(requestBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksIndex);
