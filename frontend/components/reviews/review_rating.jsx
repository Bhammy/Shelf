import React from 'react';

class ReviewRating extends React.Component {

  constructor(props) {
    super(props);
    if (this.props.setRating) {
      this.setRating = this.props.setRating;
    } else {
      this.setRating = this.setRating.bind(this);
    }

    if (this.props.review.rating) {
      this.state = Object.assign({}, this.props.review);
      this.action = this.props.updateReview.bind(this);
      this.rating = this.props.review.rating;
    } else {
      this.rating = 0;
      this.state = Object.assign({}, this.props.review);
      this.action = this.props.postReview.bind(this);
    }
    
  }

  componentWillReceiveProps(newProps) {
    if (newProps.review !== this.state) {
      this.setState(newProps.review);
    }
  }

  setRating (e) {
    let val = parseFloat(e.target.value);
    this.setState({ rating: val }, () => {
      this.action(this.state).then( () => {
        this.props.ratingSet();
        this.action = this.props.updateReview.bind(this);
      });
    });
  }

  render() {
    return (
      <div className="review-form-rating">
          <input type="radio" value={5} name={`rating-${this.props.bookId}`}
            onClick={ this.setRating }
            className="rating-input"
            id={`rating-input-5-${this.props.bookId}`}
            defaultChecked={ (this.rating === 5 ) } />
          <label className={`rating-img-${this.props.bookId}`} htmlFor={`rating-input-5-${this.props.bookId}`}>
        </label>

          <input type="radio" value={4} name={`rating-${this.props.bookId}`}
            onClick={ this.setRating }
            className="rating-input"
            id={`rating-input-4-${this.props.bookId}`}
            defaultChecked={ (this.rating === 4 ) } />
          <label className={`rating-img-${this.props.bookId}`} htmlFor={`rating-input-4-${this.props.bookId}`}>
        </label>

          <input type="radio" value={3} name={`rating-${this.props.bookId}`}
            onClick={ this.setRating }
            className="rating-input"
            id={`rating-input-3-${this.props.bookId}`}
            defaultChecked={ (this.rating === 3 ) } />
          <label className={`rating-img-${this.props.bookId}`} htmlFor={`rating-input-3-${this.props.bookId}`}>
        </label>

          <input type="radio" value={2} name={`rating-${this.props.bookId}`}
            onClick={ this.setRating }
            className="rating-input"
            id={`rating-input-2-${this.props.bookId}`}
            defaultChecked={ (this.rating === 2 ) } />
          <label className={`rating-img-${this.props.bookId}`} htmlFor={`rating-input-2-${this.props.bookId}`}>
        </label>

          <input type="radio" value={1} name={`rating-${this.props.bookId}`}
            onClick={ this.setRating }
            className="rating-input"
            id={`rating-input-1-${this.props.bookId}`}
            defaultChecked={ (this.rating === 1 ) } />
          <label className={`rating-img-${this.props.bookId}`} htmlFor={`rating-input-1-${this.props.bookId}`}>
        </label>
      </div>
    );
  }
}

export default ReviewRating;
