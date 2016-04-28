import React, {Component} from 'react';
import {Link} from 'react-router';

import RecipeForm from './RecipeForm';

export default class EditRecipe extends Component {

  componentWillMount() {

    // only if the recipe is not already loaded, fetch it.
    // if(this.props.recipes.recipeDetail._id !== this.props.params.recipe_id) {
      this.props.actions.fetchRecipe(this.props.params.recipe_id);
    // }
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
    const recipe = this.props.recipes.recipeDetail;
    console.log(recipe);
    return (
      <div>
        <h2>Edit Recipe: {recipe.title}</h2>
        <RecipeForm
          onSubmit={this.onSubmit}
          title={recipe.title}
          description={recipe.description}/>
        <button onClick={this.onRevert}>Revert</button>
        <button onClick={this.onDelete}>Delete!</button>

      </div>
    );
  }
}
