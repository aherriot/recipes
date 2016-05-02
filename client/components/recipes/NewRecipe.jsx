import React, {Component} from 'react';

import RecipeForm from './RecipeForm';

export default class NewRecipe extends Component {

  onSubmit = (title, description) => {

    // this.props.actions.addRecipe(title, description);
  }

  render() {
    return (
      <div>
        <h2>New Recipe</h2>
        <RecipeForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
