import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewRatingImage from '../reviews/review_rating_img';
import BookshelfAddItemContainer from '../bookshelves/bookshelf_add_item_container';
import ReviewFormContainer from '../reviews/review_form_container';

class BookModal extends React.Component {

  constructor(props) {
    super(props);
    this.book = props.book;
    this.closeActions = this.closeActions.bind(this);
    this.state = { reviewSubmitted: "no" }
    this.reviewSubmitted = this.reviewSubmitted.bind(this);
  }

  componentDidMount() {
    this.props.requestBook(this.book.id);
  }

  componentWillReceiveProps(newProps) {
    this.book = newProps.book;
  }

  closeActions () {
    this.props.history.goBack();
  }

  reviewSubmitted() {
    this.setState({ reviewSubmitted: "yes" });
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

  render () {
    return(
      <div id={`modal-${this.book.id}`} className="book-modal hidden">
        <content className="book-modal-content">
          <section className="book-modal-image">
            <img src={ this.book.image_url } />
          </section>
          <section className="book-modal-details">
            <BookshelfAddItemContainer bookshelves={ this.props.bookshelves } bookId={ this.book.id }/>
            <h2><b>{ this.book.title }</b></h2>
            <h4><i>{ this.book.author }</i></h4>
            <p> { this.book.description} </p>
            <h6><i>Rated by { this.book.reviews.length } users</i></h6>
            <hr/>
            <ReviewFormContainer bookId={ this.book.id } currentUser={ this.props.currentUser } reviewSubmitted={ this.reviewSubmitted }/>
          </section>
          <section>
            <button onClick={ this.closeActions }>Close Window</button>
          </section>
        </content>
        <section className="book-modal-reviews">
          <h3>User Reviews</h3>
          <ul>
            { this.buildReviews(this.book.reviews) }
          </ul>
        </section>
      </div>
    );
  }
}

export default withRouter(BookModal);
