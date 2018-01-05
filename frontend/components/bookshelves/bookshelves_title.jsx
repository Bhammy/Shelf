import React from 'react';
import { withRouter } from 'react-router-dom';

class BookshelfTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let shelfTitle = "My Shelves";

    if (this.props.currentShelf) {
      shelfTitle = this.props.currentShelf.shelf_title;
    }

    return(
      <h3> { shelfTitle } </h3>
    );
  }
}

export default BookshelfTitle;
