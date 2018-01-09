import { connect } from 'react-redux';
import BookshelfDisplay from './bookshelf_display';
import { requestBookshelf } from '../../actions/bookshelf_actions';
import { requestBooks } from '../../actions/book_actions';
import { selectBookshelfBooks } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  bookshelf: state.entities.bookshelves[ownProps.match.params.id],
  bookshelves: Object.values(state.entities.bookshelves),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBookshelf: (shelfId) => dispatch(requestBookshelf(shelfId)),
  requestBooks: () => dispatch(requestBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfDisplay);
