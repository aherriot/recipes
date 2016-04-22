import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Login extends Component {

  componentWillMount() {
    this.props.actions.fetchRecipe(this.props.params.recipe_id);
  }

  render() {

    const recipe = this.props.recipes.recipeDetail;

    return (
      <div>
        <h2>Recipe</h2>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
      </div>
    );
  }
}
