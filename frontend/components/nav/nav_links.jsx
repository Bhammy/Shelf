import React from 'react';

class NavLinks extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <button onClick={ this.props.logout }>Logout</button>
      </div>
    );
  }

}

export default NavLinks;
