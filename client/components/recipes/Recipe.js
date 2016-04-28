import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Recipe extends Component {

  componentWillMount() {
    // only if the recipe is not already loaded, fetch it.
    // if(this.props.recipes.recipeDetail._id !== this.props.params.recipe_id) {
      this.props.actions.fetchRecipe(this.props.params.recipe_id);
    // }
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

    const recipe = this.props.recipes.recipeDetail;

    return (
      <div>
        <h2>Recipe</h2>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <button onClick={this.onEdit}>Edit</button>
        <button onClick={this.onDelete}>Delete!</button>

      </div>
    );
  }
}
