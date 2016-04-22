import React, {Component} from 'react';
import {Link} from 'react-router';

import styles from './App.css';

import HeaderContainer from '../containers/HeaderContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <p>
          <Link to="/recipes">Recipes</Link>
        </p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
};
