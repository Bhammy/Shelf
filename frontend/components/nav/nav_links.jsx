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
          <li class="nav-link-icon"><Link to={`/users/${this.props.currentUser.id}`}><img src={window.staticImages.profile}/></Link><span class="tooltip">User Profile</span></li>
          <li class="nav-link-icon"><Link to={"/books"}><img src={window.staticImages.books}/></Link><span class="tooltip">Browse Books</span></li>
          <li class="nav-link-icon"><Link to={`/users/${this.props.currentUser.id}/bookshelves`}><img src={window.staticImages.libbw32}/></Link><span class="tooltip">Browse Books</span></li>
          <li><button onClick={ this.props.logout }> Logout </button></li>
        </div>
      </ul>
    );
  }
}

export default NavLinks;
