import React, { PropTypes, Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class RecipeForm extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.refs.title.getValue(), this.refs.description.getValue());
  }
  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <TextField ref="title" hintText="Title" defaultValue={this.props.title} />
        <br />
        <TextField ref="description" hintText="Description" defaultValue={this.props.description} multiLine={true}/>
        <br />
        <RaisedButton type="submit" label="Save" primary={true}/>
      </form>
    );
  }
}

export default RecipeForm;
