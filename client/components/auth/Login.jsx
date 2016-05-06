import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Login extends Component {

  onLogin = (e) => {
    e.preventDefault();
    this.props.actions.login(this.refs.username.getValue(), this.refs.password.getValue());
  }

  onLogout = (e) => {
    e.preventDefault();
    this.props.actions.logout();
  }

  render() {

    let content;

    if(this.props.auth.username) {
      content = (
        <div>
          <p>You are logged in as {this.props.auth.username}.</p>
          <div>
            <RaisedButton label="Logout" primary={true} onClick={this.onLogout} />
          </div>
        </div>
      );
    } else {
      content = (
        <form onSubmit={this.onLogin}>
          <TextField hintText="username" ref="username"/> <br/>
          <TextField type="password" hintText="password" ref="password"/> <br/>
          <RaisedButton type="submit" label="Login" primary={true} />
        </form>
      );
    }

    return (
      <div>
        <h2>Login</h2>
        {content}

      </div>
    );
  }
}
