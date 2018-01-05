import { connect } from 'react-redux';
import BookshelfTitle from './bookshelves_title';

const mapStateToProps = (state, ownProps) => ({
  currentBookshelfId: ownProps.match.params.id,
  currentShelf: state.entities.bookshelves[ownProps.match.params.id],
});

export default connect(mapStateToProps, null)(BookshelfTitle);
