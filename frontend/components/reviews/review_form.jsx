import React from 'react';
import ReviewRatingContainer from './review_rating_container';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.review);
    this.action = this.action.bind(this);
    if (this.state.rating === 0) {
      this.formType = "create";
    } else {
      this.formType = "edit";
    }
    this.setRating = this.setRating.bind(this);
  }

  handleChange(field) {
    return (e) => {
      return this.setState({ [field]: e.target.value });
    };
  }

  action(e) {
    e.preventDefault();
    if (this.formType === "create") {
      this.props.postReview(this.state).then(this.props.requestBook(this.props.book.id));
      this.formType = "edit";
    } else {
      this.props.updateReview(this.state).then(this.props.requestBook(this.props.book.id));
      $(`#review-input-${this.props.book.id}`).prop('disabled', true);
      $(`#review-textarea-${this.props.book.id}`).prop('disabled', true);
    }
  }

  openReview(bookId) {
    return (e) => {
      e.preventDefault();
      $(`#review-input-${bookId}`).prop('disabled', false);
      $(`#review-textarea-${bookId}`).prop('disabled', false);
    };
  }

  setRating (e) {
    this.setState({ rating: e.target.value });
  }

  render(){

    let editButton = () => (
      <button onClick={ this.openReview(this.props.book.id) }> Edit My Review </button>
    );

    let submitButton = () => (
      <button onClick={ this.action }>Submit Review</button>
    );

    return (
      <div className="review-form">
        <label><h3><i>Leave a Review!</i></h3>
          <form>
            <ReviewRatingContainer bookId={ this.props.book.id } setRating={ this.setRating }/>
            <label>Review Title
                <br />
                <input type="text" id={`review-input-${this.props.book.id}`} value={ this.state.title } onChange={ this.handleChange("title") } disabled={ (this.formType === "create" ? false : true)} />
              </label>
              { (this.formType === "create") ? null : editButton() }
              <br />
              <label>Review Body
                <br />
                <textarea id={`review-textarea-${this.props.book.id}`}
                  value={ this.state.body }
                  onChange={ this.handleChange("body") }
                  style={{width: "100%", height:"60px"}}
                  disabled={ (this.formType === "create" ? false : true)}>
                </textarea>
              </label>
              <br />
              { submitButton() }
          </form>
        </label>
      </div>
    );
  }


}

export default ReviewForm;
