import React from 'react';

class BookItemDetail extends React.Component {

  constructor(props) {
    super(props);
    this.book = props.book;
  }

  showModal () {
    return () => {
      $(`#modal-${this.book.id}`).removeClass("hidden");
      $(".modal-screen").removeClass("hide-modal-screen");
    };
  }

  render() {
    return (
      <tr className="book-row">
        <td><img src={ this.book.image_url } onClick={ this.showModal() }/></td>
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
