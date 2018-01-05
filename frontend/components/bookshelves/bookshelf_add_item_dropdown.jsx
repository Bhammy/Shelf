import React from 'react';

class BookshelfAddItemDropdown extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let shelfTitles = null;

    if (this.props.bookshelves) {
      shelfTitles = this.props.bookshelves.map( (bookshelf) => {
        return (<li>{ bookshelf.shelf_title }</li>);
      });
    }

    return (
      <div>
        <ul>
          { shelfTitles }
        </ul>
      </div>
    );
  }

}

export default BookshelfAddItemDropdown;
