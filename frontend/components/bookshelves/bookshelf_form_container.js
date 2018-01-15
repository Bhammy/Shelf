import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestBookshelf, createBookshelf, updateBookshelf, deleteBookshelf } from '../../actions/bookshelf_actions';
import BookshelfForm from './bookshelf_form';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.params.id) {
    return {
      bookshelf: state.entities.bookshelves[ownProps.match.params.id],
      currentUser: state.session.currentUser,
      formType: "edit",
    };
  } else {
    return {
      bookshelf: { shelf_title: "", user_id: ownProps.match.params.userId },
      currentUser: state.session.currentUser,
      formType: "create",
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestBookshelf: (shelfId) => dispatch(requestBookshelf(shelfId)),
  createBookshelf: (shelf) => dispatch(createBookshelf(shelf)),
  updateBookshelf: (shelf) => dispatch(updateBookshelf(shelf)),
  deleteBookshelf: (shelfId) => dispatch(deleteBookshelf(shelfId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookshelfForm));
