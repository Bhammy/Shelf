import React from 'react';
import BookItemDetail from './book_item_detail';
import BookModalContainer from './book_modal_container';
import { Route } from 'react-router-dom';

class BooksIndex extends React.Component {

  constructor(props) {
    super(props);
    this.createBookModals = this.createBookModals.bind(this);
    this.createBookItems = this.createBookItems.bind(this);
  }

  componentDidMount() {
    this.props.requestBooks();
    this.props.requestBookshelves(this.props.currentUser.id);
    this.createBookModals(this.props.books);
    this.createBookItems(this.props.books);
  }

  componentWillReceiveProps(newProps) {
    if (this.equalBooks(this.props.books, newProps.books)) {
      this.createBookModals(newProps.books);
      this.createBookItems(newProps.books);
    }
  }

  equalBooks(oldProps, newProps) {
    for (var i = 0; i < oldProps.length; i++) {
      if (oldProps[i] !== newProps[i]) {
        return false;
      }
    }
    return true;
  }

  createBookModals(books) {
    this.bookModals = books.map( (book) => {
      return (
        <Route exact path={`/books/${book.id}`} key={ book.id } component={() => <BookModalContainer bookId={ book.id } /> } />
      );
    });
  }

  createBookItems(books) {
    this.bookItems = books.map( (book) => {
      return(
        <BookItemDetail book={ book } key={ book.id } bookshelves={ this.props.bookshelves }/>
      );
    });
  }

  render() {

    return (
      <section className="books-index">
        { this.bookModals }
        <Route path="/books/:bookId" render={ () => <div className="modal-screen"></div>} />
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
            { this.bookItems }
          </tbody>
        </table>
      </section>
    );
  }

}

export default BooksIndex;
