import React from 'react';
import { withRouter } from 'react-router-dom';
import BookshelfAddItemContainer from '../bookshelves/bookshelf_add_item_container';

class BookItemDetail extends React.Component {

  constructor(props) {
    super(props);
    this.book = props.book;
    this.showActions = this.showActions.bind(this);
  }

  showActions () {
    this.showModal();
    this.props.history.push(`/books/${this.book.id}`);
  }

  showModal () {
    $(".modal-screen").removeClass("hide-modal-screen");
  }

  render() {
    return (
      <tr className="book-row">
        <td><img src={ this.book.image_url } onClick={ this.showActions }/></td>
        <td>{ this.book.title }</td>
        <td>{ this.book.author }</td>
        <td> Avg Rating </td>
        <td> User Rating </td>
        <td>{ this.book.description.slice(0, 80)+"..." }</td>
        <td> <BookshelfAddItemContainer bookshelves={ this.props.bookshelves } /> </td>
      </tr>
    );
  }

}

export default withRouter(BookItemDetail);
