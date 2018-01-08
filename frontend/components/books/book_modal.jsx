import React from 'react';
import { withRouter } from 'react-router-dom';
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
      if (review.title) {
        return(
          <li key={idx} >
            <h3>{ review.title } </h3>
            <span>{ review.rating ? review.rating : null }</span>
            <p>{ review.body }</p>
            <h6><i> Reviewed by { review.username }</i></h6>
          </li>
        );
      } else {
        return null;
      }
    });
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
            <h2>{ this.book.title }</h2>
            <h4><i>{ this.book.author }</i></h4>
            <p> { this.book.description} </p>
            <h6><i>Rated by { this.book.reviews.length } users</i></h6>
            <ReviewFormContainer bookId={ this.book.id } currentUser={ this.props.currentUser } reviewSubmitted={ this.reviewSubmitted }/>
            <hr/>
          </section>
          <section>
            <button onClick={ this.closeActions }>Close Window</button>
          </section>
        </content>
        <section className="book-modal-reviews">
          <h3>User Reviews</h3>
          <hr />
          <ul>
            { this.buildReviews(this.book.reviews) }
          </ul>
        </section>
      </div>
    );
  }
}

export default withRouter(BookModal);
