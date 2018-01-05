import { connect } from 'react-redux';
import { createBookshelf, updateBookshelf, deleteBookshelf } from '../../actions/bookshelf_actions';
import BookshelfForm from './bookshelf_form';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.params.id) {
    return {
      bookshelf: state.entities.bookshelves[ownProps.match.params.id],
    };
  } else {
    return {
      bookshelf: { shelf_title: "", user_id: ownProps.match.params.userId }
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBookshelf: (shelfId) => dispatch(requestBookshelf(shelfId)),
  createBookshelf: (shelf) => dispatch(createBookshelf(shelf)),
  updateBookshelf: (shelf) => dispatch(updateBookshelf(shelf)),
  deleteBookshelf: (shelfId) => dispatch(deleteBookshelf(shelfId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfForm);
