import { connect } from 'react-redux';
import BookItemDetail from './book_item_detail';
import { postReview, updateReview } from '../../actions/review_actions';
import { requestBook } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.entities.books[ownProps.bookId],
    bookshelves: ownProps.bookshelves,
    bookReview: ownProps.bookReview,
    currentUserId: state.session.currentUser.id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBook: (bookId) => dispatch(requestBook(bookId)),
  updateReview: (review) => dispatch(updateReview(review)),
  postReview: (review) => dispatch(postReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookItemDetail);
