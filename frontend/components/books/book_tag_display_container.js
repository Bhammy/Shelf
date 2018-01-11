import { connect } from 'react-redux';
import BookTagDisplay from './book_tag_display';
import { updateBook } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => ({
  book: state.entities.books[ownProps.bookId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateBook: (book) => dispatch(updateBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookTagDisplay);
