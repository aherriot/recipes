import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
  createAccount: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '100px'
  }
}

export default class CreateAccount extends Component {

  onCreateAccount = (e) => {
    e.preventDefault();
    if(this.refs.password.getValue() !== this.refs.password2.getValue()) {
      console.log('password mismatch');
    } else {
      this.props.actions.createAccount(this.refs.username.getValue(), this.refs.password.getValue());
    }
  }

  render() {
    return (
      <div style={styles.createAccount}>
        <h2>Create Account</h2>
        <form onSubmit={this.onCreateAccount}>

          <TextField hintText="Username" ref="username"/> <br/>
          <TextField type="password" hintText="Password" ref="password"/> <br/>
          <TextField type="password" hintText="Confirm Password" ref="password2"/> <br/>

          <RaisedButton type="submit" label="Create Account" primary={true} />
        </form>
      </div>
    );
  }
}
