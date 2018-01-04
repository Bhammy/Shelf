import React from 'react';
import { withRouter } from 'react-router-dom';

class BookModal extends React.Component {

  constructor(props) {
    super(props);
    this.book = props.book;
    this.closeActions = this.closeActions.bind(this);
  }

  closeActions () {
    this.hideModal();
    this.props.history.push(`/books`);
  }

  hideModal () {
    $(".modal-screen").addClass("hide-modal-screen");
  }

  render () {
    return(
      <div id={`modal-${this.book.id}`} className="book-modal hidden">
        <content className="book-modal-content">
          <section className="book-modal-image">
            <img src={ this.book.image_url } />
          </section>
          <section>
            <button onClick={ this.closeActions }>Close Window</button>
          </section>
          <section className="book-modal-details">
            <h2>{ this.book.title }</h2>
            <h4>{ this.book.author }</h4>
            <p> { this.book.description} </p>
          </section>
        </content>
      </div>
    );
  }
}

export default withRouter(BookModal);
