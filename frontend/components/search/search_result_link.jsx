import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultLink = ({ book, last }) => {
  return(
    <li><Link to={`/books/${book.id}`}><img src={ book.image_url }/>
      <p>{ book.title.length > 40 ? book.title.slice(0,40)+" ..." : book.title }</p>
    </Link></li>
  )
};

export default SearchResultLink;
