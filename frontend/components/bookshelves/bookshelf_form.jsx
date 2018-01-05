import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.bookshelf;
    this.submitShelf = this.submitShelf.bind(this);
  }

  handleChange(e) {
    this.setState({ shelf_title: e.target.value });
  }

  submitShelf(e) {
    e.preventDefault();
  }

  render () {
    return (
      <div className="bookshelf-form">
        <form>
          <label> Shelf Title
            <input type="text" value="" onChange={ this.handleChange } />
          </label>
          <button onClick={ this.submitShelf }>Submit</button>
        </form>
      </div>
    );
  }

}

export default BookshelfForm;
