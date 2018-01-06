import React from 'react';

class BookshelfCheckbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isChecked: this.props.bookshelf.books.some( (book) => book.id === this.props.bookId )};
    this.shelf_membership = { shelf_id: this.props.bookshelf.id, book_id: this.props.bookId };
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  toggleCheck(e) {
    if (this.state.isChecked) {
      this.props.removeBookFromShelf(this.shelf_membership);
      this.setState({ isChecked: false });
    } else {
      this.props.addBookToShelf(this.shelf_membership);
      this.setState({ isChecked: true });
    }
  }

  render() {
    return (
      <label>
        <input type="checkbox" value={`${this.props.bookshelf.shelf_title}`} checked={ this.state.isChecked } onChange={ this.toggleCheck } />
        { this.props.bookshelf.shelf_title }
      </label>
    );
  }
}

export default BookshelfCheckbox;
