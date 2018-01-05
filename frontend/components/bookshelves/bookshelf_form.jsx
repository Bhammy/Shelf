import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.bookshelf);
    this.submitShelf = this.submitShelf.bind(this);
  }

  handleChange(e) {
    return (e) => this.setState({ shelf_title: e.target.value });
  }

  submitShelf(e) {
    e.preventDefault();
    if (this.props.formType === "create") {
      this.props.createBookshelf(this.state).then( (success) => {
        debugger
        this.props.history.push(`/users/${success.user_id}/bookshelves/${success.id}`);
      });
    } else {
      this.props.updateBookshelf(this.state).then( (shelf) => this.props.history.push(`/users/${this.props.match.userId}/bookshelves/${shelf.id}`));
    }
  }

  render () {
    return (
      <div className="bookshelf-form" onSubmit={ this.submitShelf }>
        <form>
          <label> Shelf Title
            <input type="text" value={ this.state.shelf_title } onChange={ this.handleChange() } />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }

}

export default BookshelfForm;
