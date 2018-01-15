import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookshelfTitle from './bookshelves_title';

const mapStateToProps = (state, ownProps) => {
  return {
    currentBookshelfId: ownProps.match.params.id,
    currentShelf: state.entities.bookshelves[ownProps.match.params.id],
  };
};

export default withRouter(connect(mapStateToProps, null)(BookshelfTitle));
