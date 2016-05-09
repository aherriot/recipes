import React, {Component} from 'react';
import {Link} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardText from 'material-ui/Card/CardText';

import GridList from 'material-ui/GridList/GridList';
import GridTile from 'material-ui/GridList/GridTile';

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

      recipeContent = recipes.map(recipe =>
          <div key={recipe._id}>
            <Card>
              <CardHeader
                title={<Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link>}
              />
              <CardText>{recipe.description}</CardText>
            </Card>
          </div>
      );
    }

    return (
      <div>
        <h2>Recipes</h2>
        <Link to="/recipes/new"><RaisedButton primary={true} label="Add Recipe"/></Link>

        {recipeContent}
      </div>
    );
  }
}
