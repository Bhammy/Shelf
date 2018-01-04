import React from 'react';
import BookItemDetail from './book_item_detail';
import BookModal from './book_modal';

class BooksIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBooks();
  }

  render() {
    let books = this.props.books.map( (book) => {
      return(
        <BookItemDetail book={ book } key={ book.id }/>
      );
    });

    let bookModals = this.props.books.map( (book) => {
      return (
        <BookModal book={ book } key={ book.id }/>
      );
    });

    return (
      <section className="books-index">
        { bookModals }
        <div className="modal-screen hide-modal-screen"></div>
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
            { books }
          </tbody>
        </table>
      </section>
    );
  }

}

export default BooksIndex;
