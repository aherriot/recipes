import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Login extends Component {

  componentWillMount() {

      // if(!this.props.recipes.loaded) {
        this.props.actions.fetchRecipes();
      // }
  }

  render() {

    const recipes = this.props.recipes.recipes.map((recipe) => {
      return (
        <div key={recipe._id}>
          <h3><Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link></h3>
          <p>{recipe.description}</p>
        </div>
      );
    })

    return (
      <div>
        <h2>Recipes</h2>
        <Link to="/recipes/new">Add Recipe</Link>

        {recipes}
      </div>
    );
  }
}
