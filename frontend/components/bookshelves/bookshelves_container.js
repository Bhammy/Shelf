import { connect } from 'react-redux';
import { requestBookshelves, requestBookshelf, createBookshelf, updateBookshelf, deleteBookshelf } from '../../actions/bookshelf_actions';
import BookshelfIndex from './bookshelf_index';

const mapStateToProps = (state, ownProps) => ({
  bookshelves: Object.values(state.entities.bookshelves),
  currentUser: state.session.currentUser,
  currentBookshelfId: state.ui.currentBookshelf,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBookshelf: (shelfId) => dispatch(requestBookshelf(shelfId)),
  requestBookshelves: (userId) => dispatch(requestBookshelves(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex);
