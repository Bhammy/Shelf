import React from 'react';

class ErrorsDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.sessionErrors = this.props.errors.session;
  }

  componentWillReceiveProps(newProps) {
    this.sessionErrors = newProps.errors.session;
  }

  render() {
    return (
      <ul>
        { this.sessionErrors }
      </ul>
    );
  }
}

export default ErrorsDisplay;
