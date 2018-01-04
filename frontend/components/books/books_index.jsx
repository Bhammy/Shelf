import React from 'react';

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
        <tr key={ book.id }>
          <td>{ book.title }</td>
          <td>{ book.author }</td>
          <td>{ book.description }</td>
        </tr>
      );
    });
    return (
      <section className="books-index">
        <table>
          <tbody>
            <tr>
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
