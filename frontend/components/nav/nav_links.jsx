import React from 'react';
import { Link } from 'react-router-dom';

class NavLinks extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Link to={`/users/${this.props.currentUser.id}`}> My Bookshelves </Link>
        <button onClick={ this.props.logout }> Logout </button>
      </div>
    );
  }
}

export default NavLinks;
