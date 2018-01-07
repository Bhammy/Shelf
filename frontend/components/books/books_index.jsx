import React from 'react';
import BookItemDetail from './book_item_detail';
import BookModalContainer from './book_modal_container';
import { Route } from 'react-router-dom';

class BooksIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBooks();
    this.props.requestBookshelves(this.props.currentUser.id);
  }

  render() {
    let bookItems = this.props.books.map( (book) => {
      return(
        <BookItemDetail book={ book } key={ book.id } bookshelves={ this.props.bookshelves }/>
      );
    });

    let bookModals = this.props.books.map( (book) => {
      return (
        <Route path={`/books/${book.id}`} key={ book.id } component={() => <BookModalContainer book={ book } /> } />
      );
    });

    return (
      <section className="books-index">
        { bookModals }
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
            { bookItems }
          </tbody>
        </table>
      </section>
    );
  }

}

export default BooksIndex;
