import React, {Component} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import statuses from '../../constants/statuses';
import RecipeForm from './RecipeForm';

export default class Recipe extends Component {

  componentWillMount() {
    this.props.actions.fetchRecipe(this.props.params.recipe_id);
  }

  onEdit = () => {
    this.props.actions.startEditRecipe();
    // this.props.actions.push(`/recipes/${this.props.params.recipe_id}/edit`);
  }

  onDelete = () => {
    if(confirm('Are you sure you want to delete?')) {
      this.props.actions.deleteRecipe(this.props.params.recipe_id);
    }
  }

  onRevert = () => {
    this.props.actions.revertRecipe();
  }

  onSubmit = (title, description) => {
    this.props.actions.editRecipe(this.props.params.recipe_id, title, description);
  }

  render() {
    const {status, recipeDetail, error, editing } = this.props.recipes;

    if(status === statuses.ERROR) {
      return (
        <div>
          {error}
        </div>
      );
    } else if(status === statuses.PENDING || status === statuses.INIT) {
      return (
        <div>
          Loading...
        </div>
      );
    } else if(status === statuses.SUCCESS) {

      let buttons;
      if(this.props.auth.username === recipeDetail.username) {
        buttons = (
          <div>
            <RaisedButton onClick={this.onEdit} label="Edit" primary={true}/>
            <RaisedButton onClick={this.onDelete} label="Delete" secondary={true}/>

          </div>
        );
      }

      return (
        <div>
          <h3>{recipeDetail.title}</h3>
          <p>{recipeDetail.description}</p>
          <p>Posted by: {recipeDetail.username}</p>

          {buttons}
        </div>
      );

    } else if(status === statuses.EDITING) {
      return (
        <div>
          <RecipeForm
            onSubmit={this.onSubmit}
            title={recipeDetail.title}
            description={recipeDetail.description}
          />
          <br />
          <RaisedButton onClick={this.onRevert} label="Revert" secondary={true}/>
        </div>
      );
    }
  }
}
