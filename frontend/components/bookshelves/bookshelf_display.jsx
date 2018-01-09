import React from 'react';
import BookItemDetail from '../books/book_item_detail';

class BookshelfDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.bookshelf = this.props.bookshelf;
  }

  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.requestBookshelf(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.bookshelf != newProps.bookshelf) {
      this.bookshelf = newProps.bookshelf;
    }
  }

  render () {

    let bookItems;

    if (this.bookshelf) {
        bookItems = this.bookshelf.books.map( (book, idx) => {
        return (
          <BookItemDetail book={ book} key = { idx } bookshelves={ this.props.bookshelves }/>
        );
      });
    } else {
      bookItems = null;
    }

    return (
      <div>
        <table className="books-table">
          <tbody>
            <tr className="books-headers">
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>Avg Rating</th>
              <th>User Rating</th>
              <th>Description</th>
              <th>Add to Shelf</th>
            </tr>
            { bookItems }
          </tbody>
        </table>
      </div>
    );

  }

}

export default BookshelfDisplay;
