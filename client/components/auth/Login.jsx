import React, {Component} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
  login: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '100px'
  }
}

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
          <p>It's <Link to="/recipes">recipe</Link> time!</p>
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
      <div style={styles.login}>
        <div>
          <h2>Login!</h2>
        </div>
        {content}
      </div>
    );
  }
}
