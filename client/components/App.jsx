import React, {Component} from 'react';
import {Link} from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import styles from './App.css';
import HeaderContainer from '../containers/HeaderContainer';

// const styles = {
//   container: {
//     textAlign: 'center',
//     paddingTop: 200,
//   },
// };

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#1b4499',
  },
  flatButton: {
    textColor: '#ffffff'
  }
});



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <HeaderContainer />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
};

if (module.hot) {
  module.hot.accept();
}
