import React, {Component} from 'react';
import {Link} from 'react-router';

import statuses from '../../constants/statuses';

import RecipeForm from './RecipeForm';

export default class EditRecipe extends Component {

  componentWillMount() {


    this.props.actions.fetchRecipe(this.props.params.recipe_id);
  }

  onRevert = (event) => {
    event.preventDefault();
    this.props.actions.push(`/recipes/${this.props.params.recipe_id}`);
  }

  onDelete = (event) => {
    event.preventDefault();
    if(confirm('Are you sure you want to delete?')) {
      this.props.actions.deleteRecipe(this.props.params.recipe_id);
    }
  }

  onSubmit = (title, description) => {
    this.props.actions.editRecipe(this.props.params.recipe_id, title, description);
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
      recipeContent = (
        <div>
          <RecipeForm
            onSubmit={this.onSubmit}
            title={recipeDetail.title}
            description={recipeDetail.description}
          />

          <button onClick={this.onRevert}>Revert</button>
          <button onClick={this.onDelete}>Delete!</button>
        </div>

      )
    }

    return (
      <div>
        <h2>Edit Recipe</h2>
        {recipeContent}
      </div>
    );
  }
}
