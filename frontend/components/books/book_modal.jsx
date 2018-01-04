import React from 'react';

class BookModal extends React.Component {

  constructor(props) {
    super(props);
    this.book = props.book;
  }

  hideModal () {
    return () => {
      $(`#modal-${this.book.id}`).addClass("hidden");
      $(".modal-screen").addClass("hide-modal-screen");
    };
  }

  render () {
    return(
      <div id={`modal-${this.book.id}`} className="book-modal hidden">
        <content className="book-modal-content">
          <section className="book-modal-image">
            <img src={ this.book.image_url } />
          </section>
          <section>
            <button onClick={ this.hideModal() }>Close Window</button>
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

export default BookModal;
