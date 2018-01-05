import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BookshelfNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.match.params.id) {
      if (this.props.match.params.id === "new") {
        return (null);
      } else {
        return (
          <div className="bookshelf-nav-buttons">
            <Link to={`/users/${this.props.match.params.userId}/bookshelves/new`}>Create New Shelf</Link>
            <Link to={`/users/${this.props.match.params.userId}/bookshelves/${this.props.match.params.id}/edit`}>Edit This Shelf</Link>
          </div>
        );
      }
    } else {
      return (
        <div className="bookshelf-nav-buttons">
          <Link to={`/users/${this.props.match.params.userId}/bookshelves/new`}>Create New Shelf</Link>
        </div>
      );
    }
  }

}

export default withRouter(BookshelfNav);
