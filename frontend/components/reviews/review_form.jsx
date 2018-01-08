import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.review);
    this.action = this.action.bind(this);
    if (this.state.title === "") {
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

  componentWillReceiveProps(newProps) {
    if (this.props.review !== newProps.review) {
      this.setState(Object.assign({}, newProps.review));
    }
  }

  action(e) {
    e.preventDefault();
    if (this.formType === "create") {
      this.props.postReview(this.state).then(this.props.requestBook(this.props.book.id));
      this.formType = "edit";
    } else {
      this.props.updateReview(this.state).then(this.props.requestBook(this.props.book.id));
      $("input").prop('disabled', true);
      $("textarea").prop('disabled', true);
    }
  }

  openReview(e) {
    e.preventDefault();
    $("input").prop('disabled', false);
    $("textarea").prop('disabled', false);
  }

  setRating (e) {
    this.setState({ rating: e.target.value });
  }

  render(){

    let editButton = () => (
      <button onClick={ this.openReview }> Edit My Review </button>
    );

    let submitButton = () => (
      <button onClick={ this.action }>Submit Review</button>
    );

    return (
      <div className="review-form">
        <label><h3><i>Leave a Review!</i></h3>
          <form>
            <div className="review-form-rating">

              <input type="radio" value={5} name="rating"
                onClick={ this.setRating }
                className="rating-input"
                id="rating-input-5"
                defaultChecked={ (this.state.rating === 5 ) } />
            <label className="rating-img" htmlFor="rating-input-5">
            </label>

              <input type="radio" value={4} name="rating"
                onClick={ this.setRating }
                className="rating-input"
                id="rating-input-4"
                defaultChecked={ (this.state.rating === 4 ) } />
            <label className="rating-img" htmlFor="rating-input-4">
            </label>

              <input type="radio" value={3} name="rating"
                onClick={ this.setRating }
                className="rating-input"
                id="rating-input-3"
                defaultChecked={ (this.state.rating === 3 ) } />
            <label className="rating-img" htmlFor="rating-input-3">
            </label>

              <input type="radio" value={2} name="rating"
                onClick={ this.setRating }
                className="rating-input"
                id="rating-input-2"
                defaultChecked={ (this.state.rating === 2 ) } />
            <label className="rating-img" htmlFor="rating-input-2">
            </label>

              <input type="radio" value={1} name="rating"
                onClick={ this.setRating }
                className="rating-input"
                id="rating-input-1"
                defaultChecked={ (this.state.rating === 1 ) } />
            <label className="rating-img" htmlFor="rating-input-1">
            </label>

            </div>
          <label>Review Title
              <br />
              <input type="text" value={ this.state.title } onChange={ this.handleChange("title") } disabled={ (this.formType === "create" ? false : true)} />
            </label>
            { (this.formType === "create") ? null : editButton() }
            <br />
            <label>Review Body
              <br />
              <textarea value={ this.state.body } onChange={ this.handleChange("body") } style={{width: "100%", height:"60px"}} disabled={ (this.formType === "create" ? false : true)}></textarea>
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
