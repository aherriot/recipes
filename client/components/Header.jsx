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
          <div>Logged in as: {this.props.auth.username}</div>
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
      );
    } else {
      authSection = (
        <div>
          <Link to="/login">Login</Link><br />
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
