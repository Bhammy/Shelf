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
    let errors = this.sessionErrors.map( (error, idx) => {
      return (<li key={idx}>{ error }</li>);
    });

    return (
      <ul>
        { errors }
      </ul>
    );
  }
}

export default ErrorsDisplay;
