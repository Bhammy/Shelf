import React from 'react';

class BookTagDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = { book: this.props.book, tags: Object.values(this.props.book.tags) };
    this.bookTags = this.bookTags.bind(this);
    this.addTag = this.addTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  bookTags() {
    if (this.state.tags.length > 0) {
      return this.state.tags.map( (tag) => {
        return (
          <div key={ tag.name } className="tag-label"><span>{ tag.name }</span><button className="remove-tag-button" onClick={ this.removeTag(tag) }>×</button></div>
        );
      });
    } else {
      return "No user-tagged genres yet.";
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.book.tags !== this.state.book.tags) {
      this.setState({ book: newProps.book, tags: Object.values(newProps.book.tags) });
    }
  }

  removeTag(tag) {
    return (e) => {
      let newTags = this.state.tags;
      newTags = newTags.filter( (stateTag) => stateTag.name !== tag.name );
      let newBook = this.state.book;
      newBook.tag_names = newTags.map( (newTag) => newTag.name);
      if (newBook.tag_names.length < 1) {
        newBook.tag_names = [[]];
      }
      this.props.updateBook(newBook).then( (book) => {
        this.setState({ book: book.book, tags: Object.values(book.book.tags) });
      });
    };
  }

  addTag(e) {
    e.preventDefault();
    let newBook = this.state.book;
    newBook.tag_names = (newBook.tags.map( (stateTag) => stateTag.name).concat([ this.state.newTag ]));
    this.props.updateBook(newBook);
  }

  handleChange(e) {
    this.setState({ newTag: e.target.value });
  }

  render() {
    return(
      <div className={`book-tags`} onSubmit={ this.addTag }>
        { this.bookTags() }
        <form className="add-tag-form">
          <label>
            <input type="text" placeholder="Add genre" onChange={ this.handleChange }/>
          </label>
          <button className="add-tag-button">Add</button>
        </form>
      </div>
    );
  }

}

export default BookTagDisplay;
