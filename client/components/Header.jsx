import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {

  onLogout = () => {
      this.props.actions.logoutAndRedirect();
  }

  render() {
    let authSection;
    if(this.props.auth.username) {
      authSection = (
        <div>
          <span>{this.props.auth.username}</span>
          <a href="#" onClick={this.onLogout}>Logout!!</a>
        </div>
      );
    } else {
      authSection = (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/createAccount">Create Account</Link>
        </div>
      );
    }

    return (
      <div>
        <h1>Recipes</h1>
        {authSection}
      </div>
    );

  }
}
