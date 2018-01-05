import React from 'react';
import { Link } from 'react-router-dom';

const BookshelfListItem = ({ bookshelf, userId }) => {
  return (
    <li>
      <Link to={`/users/${userId}/bookshelves/${bookshelf.id}`}>{bookshelf.shelf_title} ({bookshelf.books.length})</Link>
    </li>
  );
};

export default BookshelfListItem;
