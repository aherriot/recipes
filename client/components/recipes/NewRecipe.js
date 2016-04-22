import React, {Component} from 'react';

export default class Login extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.actions.addRecipe(this.refs.title.value, this.refs.description.value);
  }

  render() {
    return (
      <div>
        <h2>New Recipe</h2>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">Title</label>
          <br />
          <input id="title" type="text" ref="title"></input>
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <textarea id="description" ref="description"></textarea>
          <br />
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
