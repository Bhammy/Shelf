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

  render(){

    let editButton = () => {
      return(
        <button onClick={ this.openReview }> Edit My Review </button>
      );
    };

    return (
      <div className="review-form">
        <label>Leave a Review!
          <form>
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
            <button onClick={ this.action }>Submit Review</button>
          </form>
        </label>
      </div>
    );
  }


}

export default ReviewForm;
