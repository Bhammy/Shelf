import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username:"", password:"" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.setState( { username:"", password:"" } );
  }

  render() {
    return(
      <div className={`${this.props.formType}-form`} >
        <form onSubmit={ this.handleSubmit }>
          <input type="text" value={ this.state.username } onChange={ this.handleChange("username") }/>
          <input type="password" value={ this.state.password } onChange={ this.handleChange("password") }/>
          <button>{ ( this.props.formType === "login" ) ? "Login" : "Sign Up" }</button>
        </form>
      </div>
    );
  }

}

export default SessionForm;
