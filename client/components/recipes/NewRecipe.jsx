import React, {Component} from 'react';

import RecipeForm from './RecipeForm';
import statuses from '../../constants/statuses';


export default class NewRecipe extends Component {

  componentWillMount() {
    if(!this.props.auth.username) {
      this.props.actions.push('/login');
    }
  }

  onSubmit = (title, description) => {

    this.props.actions.addRecipe(title, description);
  }

  render() {

    const {status, error} = this.props.recipes;
    let recipeContent;

    if(status === statuses.ERROR) {
      console.log(this.props.recipes, error);
      recipeContent = (
        <div>
          {error.message}
          <RecipeForm onSubmit={this.onSubmit} />
        </div>
      );
    } else if(status === statuses.PENDING) {
      recipeContent = (
        <div>
          Loading...
        </div>
      );
    } else {
      recipeContent = <RecipeForm onSubmit={this.onSubmit} />;
    }


    return (
      <div>
        <h2>New Recipe</h2>
        {recipeContent}
      </div>
    );
  }
}
