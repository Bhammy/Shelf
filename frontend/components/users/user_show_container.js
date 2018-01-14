import { connect } from 'react-redux';
import UserShow from './user_show';
import { selectUserReviews } from '../../reducers/selectors';
import { requestBooks } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  books: state.entities.books,
  userReviews: selectUserReviews(state, state.session.currentUser.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBooks: () => dispatch(requestBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
