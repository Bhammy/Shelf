import React from 'react';
import BookshelfListItem from './bookshelf_list_item';
import BookshelfContainer from './bookshelf_container';
import { Route } from 'react-router-dom';

class BookshelfIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBookshelves(this.props.currentUser.id);
  }

  render() {

    return(
      <content className="bookshelf-container">
        <section className="bookshelf-index">
          <ul className="bookshelf-list">
            { this.props.bookshelves.map( (bookshelf) => (<BookshelfListItem bookshelf={ bookshelf } userId= {this.props.currentUser.id} key={ bookshelf.id} />) )}
          </ul>
        </section>
        <section className="bookshelf-display">
          <Route path="/users/:userId/bookshelves/:id" component={ BookshelfContainer } />
        </section>
      </content>
    );
  }

}

export default BookshelfIndex;
