import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  toolbar: {
    backgroundColor: '#fafafa'
  }
}

export default class AppToolbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      history: 1
    }
  }

  render() {
    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup>
          <FontIcon className="material-icons">arrow_back</FontIcon>

          <DropDownMenu value={this.state.history}>
            <MenuItem value={1} primaryText="Ottawa - Current Alarms" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </DropDownMenu>

        </ToolbarGroup>

      </Toolbar>
    );
  }
}
