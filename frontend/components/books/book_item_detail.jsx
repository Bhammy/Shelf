import React from 'react';
import { withRouter } from 'react-router-dom';
import BookshelfAddItemContainer from '../bookshelves/bookshelf_add_item_container';
import ReviewRatingContainer from '../reviews/review_rating_container';

class BookItemDetail extends React.Component {

  constructor(props) {
    super(props);
    this.showActions = this.showActions.bind(this);
    this.state = { justRated: false, book: this.props.book };
    this.ratingSet = this.ratingSet.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.book !== this.state.book) {
      this.setState({ book: newProps.book });
    }
  }

  showActions () {
    this.props.history.push(`/books/${this.state.book.id}`);
    this.showModal();
  }

  showModal () {
    $(".modal-screen").removeClass("hide-modal-screen");
  }

  calcAvgReview(bookReviews) {
    if (bookReviews.length > 0) {
      let totalScore = 0;
      bookReviews.forEach( (review) => { totalScore += review.rating; });
      return Math.round( (totalScore / bookReviews.length) * 10) / 10;
    } else {
      return "No reviews yet.";
    }
  }

  ratingSet () {
    this.setState({ justRated: true }, () => {
      this.props.requestBook(this.state.book.id);
    });
  }

  render() {
    if (this.state.book) {
      return (
        <tr className="book-row">
          <td><img src={ this.state.book.image_url } onClick={ this.showActions }/></td>
          <td><a onClick= { this.showActions }>
            <h3 className="data-row-title">{ this.state.book.title }</h3></a>
            <i>{ this.state.book.author }</i>
          </td>
          <td> { this.calcAvgReview(this.state.book.reviews) } </td>
          <td> <ReviewRatingContainer bookId={ this.state.book.id } ratingSet={ this.ratingSet }/> </td>
          <td>{ this.state.book.description.slice(0, 80)+"..." }</td>
          <td> <BookshelfAddItemContainer bookshelves={ this.props.bookshelves } bookId={ this.state.book.id }/> </td>
        </tr>
        );
      } else {
        return(<tr>
            <td>Loading...</td>
          </tr>
        );
      }
  }
}

export default withRouter(BookItemDetail);
