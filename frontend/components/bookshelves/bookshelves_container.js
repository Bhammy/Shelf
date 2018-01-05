import { connect } from 'react-redux';
import { requestBookshelves, requestBookshelf, createBookshelf, updateBookshelf, deleteBookshelf } from '../../actions/bookshelf_actions';
import BookshelfIndex from './bookshelf_index';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex);
