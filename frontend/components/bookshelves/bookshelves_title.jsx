import React from 'react';
import { withRouter } from 'react-router-dom';

class BookshelfTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let shelfTitle = "My Shelves";

    return(
      <h3> { shelfTitle } </h3>
    );
  }
}

export default BookshelfTitle;
