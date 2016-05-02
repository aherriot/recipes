import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';


import Recipe from '../../components/recipes/Recipe';
import {fetchRecipe, deleteRecipe} from '../../actions/recipes';

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({fetchRecipe, deleteRecipe, push}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
