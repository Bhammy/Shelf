import React from 'react';
import BookshelfCheckbox from './bookshelf_checkbox';

class BookshelfAddItemDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.bookOnBookshelf = this.bookOnBookshelf.bind(this);
    this.createMappedCheckboxes = this.createMappedCheckboxes.bind(this);
  }

  bookOnBookshelf(bookshelf) {
    bookshelf.books.some( (book) => book.id === this.props.bookId );
  }

  createMappedCheckboxes(bookshelves) {
    return bookshelves.map( (bookshelf, idx) =>
    <BookshelfCheckbox bookshelf={ bookshelf }
      bookId={ this.props.bookId }
      key={ idx }
      addBookToShelf={ this.props.addBookToShelf }
      removeBookFromShelf={ this.props.removeBookFromShelf }
    />);
  }

  render() {
    return (
      <div>
        <ul>
          { this.createMappedCheckboxes(this.props.bookshelves) }
        </ul>
      </div>
    );
  }

}

export default BookshelfAddItemDropdown;
