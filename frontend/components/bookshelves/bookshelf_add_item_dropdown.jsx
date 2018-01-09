import React from 'react';
import BookshelfCheckbox from './bookshelf_checkbox';

class BookshelfAddItemDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.bookOnBookshelf = this.bookOnBookshelf.bind(this);
    this.createMappedCheckboxes = this.createMappedCheckboxes.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = { dropdownShown: false };
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
      toggleDropdown={ this.toggleDropdown }
    />);
  }

  toggleDropdown() {
    this.setState({ dropdownShown: !this.state.dropdownShown });
    if (this.state.dropdownShown) {
      $(`.checkbox-container-dropdown-${this.props.bookId}`).removeClass("checkbox-reveal");
      $(`.checkbox-container-dropdown-${this.props.bookId}`).addClass("checkbox-hidden");
    } else {
      $(`.checkbox-container-dropdown-${this.props.bookId}`).removeClass("checkbox-hidden");
      $(`.checkbox-container-dropdown-${this.props.bookId}`).addClass("checkbox-reveal");
    }
  }

  render() {
    return (
      <div className="checkbox-container">
        <span className="checkbox-dropdown-clicker">
          Add Book to Shelf <button onClick={ this.toggleDropdown }>▾</button>
        </span>
        <div className={`checkbox-container-dropdown-${this.props.bookId} checkbox-hidden`}>
          <ul className="checkbox-container-list">
            { this.createMappedCheckboxes(this.props.bookshelves) }
          </ul>
        </div>
      </div>
    );
  }

}

export default BookshelfAddItemDropdown;
