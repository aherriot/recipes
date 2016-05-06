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

      recipeContent = (
        <GridList cellHeight={200} cols={3}>
          {recipes.map(recipe => (
            <GridTile
              key={recipe._id}
              title={recipe.title}
            >

            </GridTile>
          ))}

        </GridList>
      )
      // recipeContent = recipes.map((recipe) => {
      //   return (
      //     <div key={recipe._id}>
      //       <Link to={`/recipes/${recipe._id}`}>
      //       <Card>
      //         <CardHeader
      //           title={recipe.title}
      //         />
      //         <CardText>{recipe.description}</CardText>
      //       </Card>
      //       </Link>
      //
      //     </div>
      //   );
      // });
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
