import React from 'react';
import { withRouter } from 'react-router-dom';
import BookshelfAddItemContainer from '../bookshelves/bookshelf_add_item_container';
import ReviewRatingContainer from '../reviews/review_rating_container';

class BookItemDetail extends React.Component {

  constructor(props) {
    super(props);
    this.book = this.props.book;
    this.showActions = this.showActions.bind(this);
    // this.setRating = this.setRating.bind(this);
    // if (this.props.bookReview) {
    //   this.rating = this.props.bookReview.rating;
    //   this.state = Object.assign({}, this.props.bookReview);
    //   this.action = this.props.updateReview;
    // } else {
    //   this.rating = 0;
    //   this.state = {
    //     book_id: this.book.id,
    //     user_id: this.props.currentUserId,
    //   };
    //   this.action = this.props.postReview;
    // }
  }

  showActions () {
    this.props.history.push(`/books/${this.book.id}`);
    this.showModal();
  }

  showModal () {
    $(".modal-screen").removeClass("hide-modal-screen");
  }

  // setRating (e) {
  //   // console.log(this.state);
  //   // console.log(this.book);
  //   // console.log(this.props.bookReview);
  //   // debugger
  //   this.setState({ rating: e.currentTarget.value });
  //   // debugger
  //   this.action(this.state);
  // }

  render() {
    return (
      <tr className="book-row">
        <td><img src={ this.book.image_url } onClick={ this.showActions }/></td>
        <td><a onClick= { this.showActions }>{ this.book.title }</a></td>
        <td>{ this.book.author }</td>
        <td> Avg Rating </td>
        <td> <ReviewRatingContainer bookId={ this.book.id }/> </td>
        <td>{ this.book.description.slice(0, 80)+"..." }</td>
        <td> <BookshelfAddItemContainer bookshelves={ this.props.bookshelves } bookId={ this.book.id }/> </td>
      </tr>
    );
  }

}

export default withRouter(BookItemDetail);
