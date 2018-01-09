import React from 'react';
import BookshelfListItem from './bookshelf_list_item';
import BookshelfContainer from './bookshelf_container';
import BookshelfFormContainer from './bookshelf_form_container';
import BookshelfTitleContainer from './bookshelf_title_container';
import BookshelfNav from './bookshelf_nav';
import { Route, Switch } from 'react-router-dom';

class BookshelfIndex extends React.Component {

  constructor(props) {
    super(props);
    this.bookshelfRoutes = this.bookshelfRoutes.bind(this);
  }

  componentDidMount() {
    this.props.requestBookshelves(this.props.currentUser.id);
    this.props.requestBooks();
  }

  bookshelfRoutes() {
    this.props.bookshelves.map( (shelf) => (
        <Route path={`/users/:userId/bookshelves/:id`} component={ BookshelfContainer } />
      )
    )
  }

  render() {
    if (this.props.bookshelves.length > 0) {
      return(
        <content className="bookshelf-container">
          <section className="bookshelf-title">
            <Route exact path="/users/:userId/bookshelves/:id?" component={ BookshelfTitleContainer } />
          </section>
          <section className="bookshelf-nav">
            <Route exact path="/users/:userId/bookshelves/:id?" component={ () => <BookshelfNav deleteBookshelf={ this.props.deleteBookshelf }/>} />
            <Switch>
              <Route exact path="/users/:userId/bookshelves/:id/edit" component={ BookshelfFormContainer } />
              <Route exact path="/users/:userId/bookshelves/new" component={ BookshelfFormContainer } />
            </Switch>
          </section>
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
    } else {
      return null;
    }
  }

}

export default BookshelfIndex;
