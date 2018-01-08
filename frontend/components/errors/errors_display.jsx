import React from 'react';

class ErrorsDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.sessionErrors = this.props.errors.session;
    this.closeErrors = this.closeErrors.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.sessionErrors = newProps.errors.session;
    if (this.sessionErrors.length > 0) {
      this.showErrors();
    }
  }

  closeErrors() {
    $(".errors-display").addClass("errors-hidden");
    this.props.clearErrors();
  }

  showErrors() {
    $(".errors-display").removeClass("errors-hidden");
  }

  render() {
    let errors = this.sessionErrors.map( (error, idx) => {
      return (<li key={idx}>{ error }</li>);
    });

    return (
      <div className="errors-display errors-hidden">
        <ul className="errors-display-list">
          <div className="errors-display-lis">{ errors }</div>
          <span onClick={ this.closeErrors }>×</span>
        </ul>
      </div>
    );
  }
}

export default ErrorsDisplay;
