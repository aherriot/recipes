import React, {Component} from 'react';
import {Link} from 'react-router';

import statuses from '../../constants/statuses';

export default class ListRecipes extends Component {

  componentWillMount() {

    this.props.actions.fetchRecipes();
  }

  render() {

    const {status, recipes, error } = this.props.recipes;

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
      
      recipeContent = recipes.map((recipe) => {
        return (
          <div key={recipe._id}>
            <h3><Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link></h3>
            <p>{recipe.description}</p>
          </div>
        );
      })
    }

    return (
      <div>
        <h2>Recipes</h2>
        <Link to="/recipes/new">Add Recipe</Link>

        {recipeContent}
      </div>
    );
  }
}
