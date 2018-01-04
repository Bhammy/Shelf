import React from 'react';
import BookItemDetail from './book_item_detail';

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
    return (
      <section className="books-index">
        <table className="books-table">
          <tbody>
            <tr className="books-headers">
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
            </tr>
            { books }
          </tbody>
        </table>
      </section>
    );
  }

}

export default BooksIndex;
