import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.bookshelf;
  }


  render () {
    return (
      <div>
        Bookshelf Edit Form
      </div>
    );
  }

}

export default BookshelfForm;
