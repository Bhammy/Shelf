import React from 'react';
import { Link } from 'react-router-dom';

class NavLinks extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <ul className="nav-links">
        <div className="left-nav">
          <h1><Link to={`/users/${this.props.currentUser.id}/bookshelves`}> ]shelf[ </Link></h1>
        </div>
        <div className="right-nav">
          <li><Link to={`/users/${this.props.currentUser.id}`}>User Profile</Link></li>
          <li><Link to={"/books"}>Browse Books</Link></li>
          <li><Link to={`/users/${this.props.currentUser.id}/bookshelves`}> My Shelves </Link></li>
          <li><button onClick={ this.props.logout }> Logout </button></li>
        </div>
      </ul>
    );
  }
}

export default NavLinks;
