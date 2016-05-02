import React, {Component} from 'react';
import {Link} from 'react-router';

import statuses from '../../constants/statuses';

export default class Recipe extends Component {

  componentWillMount() {

    this.props.actions.fetchRecipe(this.props.params.recipe_id);
  }

  onEdit = () => {
    this.props.actions.push(`/recipes/${this.props.params.recipe_id}/edit`);
  }

  onDelete = () => {
    if(confirm('Are you sure you want to delete?')) {
      this.props.actions.deleteRecipe(this.props.params.recipe_id);
    }
  }

  render() {

    const {status, recipeDetail, error } = this.props.recipes;
    let recipeContent;

    if(status === statuses.ERROR) {
      recipeContent = (
        <div>
          {error}
        </div>
      );
    } else if(status === statuses.PENDING) {
      recipeContent = (
        <div>
          Loading...
        </div>
      );
    } else if(status === statuses.SUCCESS) {

      let buttons;
      if(this.props.auth.username === recipeDetail.username) {
        buttons = (
          <div>
            <button onClick={this.onEdit}>Edit</button>
            <button onClick={this.onDelete}>Delete!</button>
          </div>
        );
      }

      recipeContent = (
        <div>
          <p>Posted by: {recipeDetail.username}</p>
          <h3>{recipeDetail.title}</h3>
          <p>{recipeDetail.description}</p>
          {buttons}
        </div>
      );

    }

    return (
      <div>
        <h2>Recipe</h2>
        {recipeContent}
      </div>
    );
  }
}
