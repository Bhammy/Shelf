import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewRatingImage from '../reviews/review_rating_img';
import BookshelfAddItemContainer from '../bookshelves/bookshelf_add_item_container';
import BookTagDisplayContainer from './book_tag_display_container';
import ReviewFormContainer from '../reviews/review_form_container';

class BookModal extends React.Component {

  constructor(props) {
    super(props);
    this.closeActions = this.closeActions.bind(this);
    this.state = { actionTaken: "no", book: this.props.book }
    this.actionTaken = this.actionTaken.bind(this);
  }

  componentDidMount() {
    this.props.requestBook(this.state.book.id);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ book: newProps.book });
  }

  closeActions () {
    this.props.history.goBack();
  }

  actionTaken() {
    this.setState({ actionTaken: "yes" });
    this.props.requestBooks();
  }

  buildReviews(reviews) {
    return reviews.map( (review, idx) => {
      if (review) {
        return(
          <li key={idx} className="book-review-item">
            { review.rating ? this.buildRatingImage(review.rating) : null }<h3>{ review.title }</h3>
            <p>{ review.body }</p>
            <h6><i> Reviewed by { review.username }</i></h6>
          </li>
        );
      } else {
        return null;
      }
    });
  }

  buildRatingImage(rating) {
    return(<ReviewRatingImage rating={ rating } />)
  }

  noScroll(e) {
    e.stopPropagation();
  }

  render () {
    return(
      <div id={`modal-${this.state.book.id}`} className="book-modal hidden" onScroll={ this.freezeScroll, this.noScroll }>
        <content className="book-modal-content">
          <section className="book-modal-image">
            <img src={ this.state.book.image_url } />
          </section>
          <section className="book-modal-details">
            <BookshelfAddItemContainer bookshelves={ this.props.bookshelves } bookId={ this.state.book.id }/>
            <h2><b>{ this.state.book.title }</b></h2>
            <h4><i>{ this.state.book.author }</i></h4>
            <p> { this.state.book.description} </p>
            <h6><i>Rated by { this.state.book.reviews.length } users</i></h6>
            <h5>Users tags for this book include:</h5>
            <div><BookTagDisplayContainer bookId={ this.state.book.id } /></div>
            <hr/>
            <ReviewFormContainer bookId={ this.state.book.id } currentUser={ this.props.currentUser } />
          </section>
          <section>
            <button onClick={ this.closeActions }>Close Window</button>
          </section>
        </content>
        <section className="book-modal-reviews">
          <h3>User Reviews</h3>
          <ul>
            { this.buildReviews(this.state.book.reviews) }
          </ul>
        </section>
      </div>
    );
  }
}

export default withRouter(BookModal);
