import { connect } from 'react-redux';
import BookSearchBar from './book_search_bar';
import { searchBooks } from '../../util/books_api_util';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchBooks: (query) => searchBooks(query),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookSearchBar);
