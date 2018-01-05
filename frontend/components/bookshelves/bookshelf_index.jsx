import React from 'react';
import BookshelfListItem from './bookshelf_list_item';
import BookshelfContainer from './bookshelf_container';
import BookshelfFormContainer from './bookshelf_form_container';
import BookshelfNav from './bookshelf_nav';
import { Route, Switch } from 'react-router-dom';

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
        <h2>  </h2>
        <section className="bookshelf-nav">
          <Route exact path="/users/:userId/bookshelves/:id?" component={ BookshelfNav } />
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
  }

}

export default BookshelfIndex;
