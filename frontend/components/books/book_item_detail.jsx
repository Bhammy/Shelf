import React from 'react';

class BookItemDetail extends React.Component {

  constructor(props) {
    super(props);
    this.book = props.book;
  }

  render() {
    return (
      <tr className="book-row">
        <td><img src={ this.book.image_url } /></td>
        <td>{ this.book.title }</td>
        <td>{ this.book.author }</td>
        <td> Avg Rating </td>
        <td> User Rating </td>
        <td>{ this.book.description.slice(0, 100)+"..." }</td>
        <td> Shelf Add </td>
      </tr>
    );
  }

}

export default BookItemDetail;
