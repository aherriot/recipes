import React, {Component} from 'react';

export default class CreateAccount extends Component {

  onCreateAccount = (e) => {
    e.preventDefault();
    if(this.refs.password.value !== this.refs.password2.value) {

    } else {
      this.props.actions.createAccount(this.refs.username.value, this.refs.password.value);

    }
  }

  render() {
    return (
      <div>
        <h2>Create Account</h2>
        <form onSubmit={this.onCreateAccount}>
          <input type="text" ref="username" placeholder="username" />
          <input type="password" ref="password" placeholder="password" />
          <input type="password" ref="password2" placeholder="confirm password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
