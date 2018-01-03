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
  }

  render() {
    let errors = null;

    if ( this.props.errors.length > 0 ) {
      errors = this.props.errors.map( (error) => {
        return "errors go here";
      });
    }

    if (this.props.loggedIn) {
      return(
        <button onClick={ this.props.logout } >Logout</button>
      );
    } else {
      return(
        <div className={`${this.props.formType}-form`} onSubmit={ this.handleSubmit }>
          { errors }
          <form>
            <input type="text" onChange={ this.handleChange("username") }/>
            <input type="password" onChange={ this.handleChange("password") }/>
            <button>Submit</button>
          </form>
        </div>
      );
    }
  }

}

export default SessionForm;
