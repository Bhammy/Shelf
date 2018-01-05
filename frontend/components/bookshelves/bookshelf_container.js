import { connect } from 'react-redux';
import BookshelfDisplay from './bookshelf_display';
import { requestBookshelf } from '../../actions/bookshelf_actions';
import { selectBookshelfBooks } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  bookshelf: state.entities.bookshelves[ownProps.match.params.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBookshelf: (shelfId) => dispatch(requestBookshelf(shelfId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfDisplay);
