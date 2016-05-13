import React, {Component} from 'react';
import {Link} from 'react-router';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  collapsed: {
    toolbar: {
      padding: '0px',
      height: '36px',
      color: 'white',
      backgroundColor: '#1b4499',
      transition: 'all 800ms ease-in-out',
    },
    toolbarGroup: {
      display: 'flex',
      alignItems: 'center'
    },
    logo: {
      height: '36px',
      margin: '0px 16px 0px 24px',
      transition: 'all 800ms ease-in-out'
    },
    title: {
      margin: '0px 6px 0px 0px',
      fontSize: '13px',
      fontWeight: 500,
      transition: 'all 800ms ease-in-out'

    },
    subtitle: {
      fontWeight: 300,
      fontSize: '13px',
      color: 'rgba(255,255,255,0.75)',
      transition: 'all 800ms ease-in-out'


    }
  },
  expanded: {
    toolbar: {
      padding: '0px',
      height: '96px',
      color: 'white',
      backgroundColor: '#1b4499',
      transition: 'all 800ms ease-in-out',
    },
    toolbarGroup: {
      display: 'flex',
      alignItems: 'center'
    },
    logo: {
      height: '48px',
      margin: '0px 24px',
      transition: 'all 800ms ease-in-out'
    },
    title: {
      margin: '0px 12px 0px 0px',
      fontSize: '24px',
      fontWeight: 500,
      transition: 'all 800ms ease-in-out'

    },
    subtitle: {
      fontWeight: 300,
      fontSize: '24px',
      color: 'rgba(255,255,255,0.75)',
      transition: 'font-size 800ms ease-in-out'
    }
  }
};


export default class AppBanner extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
      pinned: false
    }
  }

  onMouseEnter = () => {
    if(!this.state.pinned) {
      this.hoverTimer = window.setTimeout(this.hoverTimerFinished, 1600);
    }
  }

  onMouseLeave = () => {
    window.clearTimeout(this.hoverTimer);
    this.setState({hovering: false});
  }

  hoverTimerFinished = () => {
    this.setState({hovering: true});
  }

  onClick = (e) => {
    //if you click on it, stop and ignore the hover timer.
    window.clearTimeout(this.hoverTimer);

    //ignore pinning if we are clicking on a button
    if(e.target.parentNode.parentNode.type === 'button' || e.target.parentNode.tagName === 'A') {
      return;
    }

    if(this.state.pinned) {
      this.setState({pinned: false, expanded: false});
    } else {
      this.setState({pinned: true});
    }
  }

  render() {

    let style;
    if(this.state.pinned || this.state.hovering) {
      style = styles.expanded;
    } else {
      style = styles.collapsed;
    }

    let authSection;

    if(this.props.auth.username) {
      authSection = (
        <div>
          User: {this.props.auth.username}
          <a href="#" onClick={this.props.actions.logoutAndRedirect}><FlatButton label="Logout"/></a>
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

    return (
      <Toolbar style={style.toolbar} onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <ToolbarGroup style={style.toolbarGroup}>
          <Link to="/recipes"><img src="/images/nokia.png" style={style.logo}/></Link>
          <div style={style.title}>Network Services Platform</div>
          <div style={style.subtitle}>NRC-Flow</div>
        </ToolbarGroup>
        <ToolbarGroup style={style.toolbarGroup}>
          {authSection}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
