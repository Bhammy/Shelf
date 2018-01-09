import React from 'react';
import { withRouter } from 'react-router-dom';
import BookshelfAddItemContainer from '../bookshelves/bookshelf_add_item_container';
import ReviewRatingContainer from '../reviews/review_rating_container';

class BookItemDetail extends React.Component {

  constructor(props) {
    super(props);
    this.book = this.props.book;
    this.showActions = this.showActions.bind(this);
  }

  showActions () {
    this.props.history.push(`/books/${this.book.id}`);
    this.showModal();
  }

  showModal () {
    $(".modal-screen").removeClass("hide-modal-screen");
  }

  render() {
    return (
      <tr className="book-row">
        <td><img src={ this.book.image_url } onClick={ this.showActions }/></td>
        <td><a onClick= { this.showActions }>{ this.book.title }</a></td>
        <td>{ this.book.author }</td>
        <td> Avg Rating </td>
        <td>  </td>
        <td>{ this.book.description.slice(0, 80)+"..." }</td>
        <td> <BookshelfAddItemContainer bookshelves={ this.props.bookshelves } bookId={ this.book.id }/> </td>
      </tr>
    );
  }
  // <ReviewRatingContainer bookId={ this.book.id }/>
}

export default withRouter(BookItemDetail);
