import { connect } from 'react-redux';
import BookshelfAddItemDropdown from './bookshelf_add_item_dropdown';
import { addBookToShelf, removeBookFromShelf } from '../../util/shelf_add_remove_util';
import { requestBookshelves } from '../../actions/bookshelf_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    bookshelves: ownProps.bookshelves,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addBookToShelf: (shelf_membership_object) => addBookToShelf(shelf_membership_object),
  removeBookFromShelf: (shelf_membership_object) => removeBookFromShelf(shelf_membership_object),
  requestBookshelves: (userId) => dispatch(requestBookshelves(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfAddItemDropdown);
