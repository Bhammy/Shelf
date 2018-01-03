import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username:"", password:"" };
    this.demoLogin = { username: "user1", password: "starwars"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLoginSubmit = this.demoLoginSubmit.bind(this);
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

  demoLoginSubmit(e) {
    e.preventDefault();
    this.props.action(this.demoLogin);
  }

  render() {

    let demoLoginButton;

    if (this.props.formType === "login") {
      demoLoginButton = <button onClick={ this.demoLoginSubmit }>Demo Login</button>;
    } else {
      demoLoginButton = null;
    }

    return(
      <div className={`${this.props.formType}-form`} >
        { (this.props.formType === "signup" ) ? <div className="signup-greeting">Meet Your Next Favorite Book 📚</div> : null}
        <form onSubmit={ this.handleSubmit }>
          <input type="text" value={ this.state.username } onChange={ this.handleChange("username") }/>
          <input type="password" value={ this.state.password } onChange={ this.handleChange("password") }/>
          <button>{ ( this.props.formType === "login" ) ? "Login" : "Sign Up" }</button>
          { demoLoginButton }
        </form>
      </div>
    );
  }

}

export default SessionForm;
