import React, { PropTypes, Component } from 'react'

class RecipeForm extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.refs.title.value, this.refs.description.value);
  }
  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input id="title" type="text" ref="title" defaultValue={this.props.title}></input>
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea id="description" ref="description" defaultValue={this.props.description}></textarea>
        <br />
        <input type="submit" value="Save"></input>
      </form>
    );
  }
}

export default RecipeForm;
