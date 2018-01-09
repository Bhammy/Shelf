import { connect } from 'react-redux';
import { requestBook, requestBooks } from '../../actions/book_actions';
import { requestBookshelves } from '../../actions/bookshelf_actions';
import { postReview, updateReview } from '../../actions/review_actions';
import { selectUserReviews } from '../../reducers/selectors';
import BooksIndex from './books_index';

const mapStateToProps = (state, ownProps) => ({
  books: Object.values(state.entities.books),
  bookshelves: Object.values(state.entities.bookshelves),
  currentUser: state.session.currentUser,
  bookReviews: selectUserReviews(state, state.session.currentUser.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBookshelves: (userId) => dispatch(requestBookshelves(userId)),
  requestBook: (bookId) => dispatch(requestBook(bookId)),
  requestBooks: () => dispatch(requestBooks()),
  updateReview: (review) => dispatch(updateReview(review)),
  postReview: (review) => dispatch(postReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksIndex);
