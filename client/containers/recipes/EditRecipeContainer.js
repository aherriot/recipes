import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';


import EditRecipe from '../../components/recipes/EditRecipe';
import {fetchRecipe, editRecipe, deleteRecipe} from '../../actions/recipes';


function mapStateToProps(state) {
  return {recipes: state.recipes};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({fetchRecipe, editRecipe, deleteRecipe, push}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRecipe);
