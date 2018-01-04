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
        <section className="book-modal-image">
          <img src={ this.book.image_url } />
        </section>
        <section>
          <button onClick={ this.hideModal() }>Close Window</button>
        </section>
        <section>
          <h2>{ this.book.title }</h2>
          <h4>{ this.book.author }</h4>
          <p> { this.book.description} </p>
        </section>
      </div>
    );
  }
}

export default BookModal;
