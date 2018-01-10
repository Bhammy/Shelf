import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultLink = ({ book }) => {
  return(
    <li><Link to={`/books/${book.id}`}>{ book.title }</Link></li>
  )
};

export default SearchResultLink;
