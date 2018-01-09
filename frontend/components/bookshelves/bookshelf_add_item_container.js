import { connect } from 'react-redux';
import BookshelfAddItemDropdown from './bookshelf_add_item_dropdown';
import { addBookToShelf, removeBookFromShelf } from '../../actions/shelf_add_remove_actions';
import { requestBookshelves } from '../../actions/bookshelf_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    bookshelves: ownProps.bookshelves,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addBookToShelf: (shelf_membership_object) => dispatch(addBookToShelf(shelf_membership_object)),
  removeBookFromShelf: (shelf_membership_object) => dispatch(removeBookFromShelf(shelf_membership_object)),
  requestBookshelves: (userId) => dispatch(requestBookshelves(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfAddItemDropdown);
