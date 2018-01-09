import { connect } from 'react-redux';
import { selectBookReview } from '../../reducers/selectors';
import ReviewRating from './review_rating';
import { postReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.entities.books[ownProps.bookId],
    currentUser: state.session.currentUser,
    review: selectBookReview(state, ownProps.bookId, state.session.currentUser.id),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  postReview: (review) => dispatch(postReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ReviewRating);
