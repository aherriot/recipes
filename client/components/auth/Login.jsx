import React, {Component} from 'react';

export default class Login extends Component {

  onLogin = (e) => {
    e.preventDefault();
    this.props.actions.login(this.refs.username.value, this.refs.password.value);
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
          <p><a href="#" onClick={this.onLogout}>Logout</a></p>
        </div>
      );
    } else {
      content = (
        <form onSubmit={this.onLogin}>
          <input type="text" ref="username" placeholder="username" />
          <input type="password" ref="password" placeholder="password" />
          <input type="submit" value="Login" />
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
