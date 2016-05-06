import React, {Component} from 'react';
import {Link} from 'react-router';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export default class App extends Component {

  onLogout = () => {
      this.props.actions.logoutAndRedirect();
  }

  render() {

    let authSection;

    if(this.props.auth.username) {
      authSection = (
        <div>
          <span>Logged in as: {this.props.auth.username}</span>
          <a href="#" onClick={this.onLogout}><FlatButton label="Logout"/></a>
        </div>
      );
    } else {
      authSection = (
        <div>
          <Link to="/login"><FlatButton label="Login"/></Link>
          <Link to="/createAccount"><FlatButton label="Create Account"/></Link>
        </div>
      );
    }

    const title = <Link to="/recipes"><FlatButton label="NOKIA - RECIPES"></FlatButton></Link>

    return (
      <div>
        <AppBar title={title}>
            {authSection}
        </AppBar>
      </div>
    );

  }
}
