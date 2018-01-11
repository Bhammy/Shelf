import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { selectBookReview } from '../../reducers/selectors';
import { requestBook } from '../../actions/book_actions';
import { postReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.entities.books[ownProps.bookId],
    currentUser: ownProps.currentUser,
    review: selectBookReview(state, ownProps.bookId, ownProps.currentUser.id),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  postReview: (review) => dispatch(postReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  requestBook: (bookId) => dispatch(requestBook(bookId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
