import React, {Component} from 'react';

export default class Login extends Component {

  onLogin = (e) => {
    e.preventDefault();
    this.props.actions.login(this.refs.username.value, this.refs.password.value);
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <p>{this.props.auth.username}</p>
        <form onSubmit={this.onLogin}>
          <input type="text" ref="username" placeholder="username" />
          <input type="password" ref="password" placeholder="password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
