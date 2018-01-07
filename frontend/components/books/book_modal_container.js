import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookModal from './book_modal';

const mapStateToProps = (state, ownProps) => ({
  book: ownProps.book,
  bookshelves: Object.values(state.entities.bookshelves),
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookModal));
