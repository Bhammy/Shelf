import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.bookshelf);
    this.submitShelf = this.submitShelf.bind(this);
    this.deleteShelf = this.deleteShelf.bind(this);
  }

  handleChange(e) {
    return (e) => this.setState({ shelf_title: e.target.value });
  }

  submitShelf(e) {
    e.preventDefault();
    if (this.props.formType === "create") {
      this.props.createBookshelf(this.state).then( (success) => {
        this.props.history.push(`/users/${success.user_id}/bookshelves/${success.id}`);
      });
    } else {
      this.props.updateBookshelf(this.state).then( (shelf) => this.props.history.push(`/users/${this.props.match.userId}/bookshelves/${shelf.id}`));
    }
  }

  deleteShelf(e) {
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}/bookshelves/`);
    this.props.deleteBookshelf(this.props.match.params.id);
  }

  render () {
    let deleteButton = null;

    if (this.props.formType === "edit") {
      deleteButton = (<button onClick={ this.deleteShelf }>Delete Shelf</button>);
    }

    return (
      <div className="bookshelf-form">
        <form>
          <label> Shelf Title
            <input type="text" value={ this.state.shelf_title } onChange={ this.handleChange() } />
          </label>
          <button onClick={ this.submitShelf }>Submit</button>
          { deleteButton }
        </form>
      </div>
    );
  }

}

export default BookshelfForm;
