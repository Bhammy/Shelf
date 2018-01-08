import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { selectBookReview } from '../../reducers/selectors';
import { requestBook } from '../../actions/book_actions';
import { postReview, updateReview } from '../../util/review_api_util';

const mapStateToProps = (state, ownProps) => {
  return {
    bookId: ownProps.bookId,
    currentUser: ownProps.currentUser,
    review: selectBookReview(state, ownProps.bookId, ownProps.currentUser.id),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  postReview: (review) => postReview(review),
  updateReview: (review) => updateReview(review),
  requestBook: (bookId) => dispatch(requestBook(bookId)),
  reviewSubmitted: () => ownProps.reviewSubmitted(),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
