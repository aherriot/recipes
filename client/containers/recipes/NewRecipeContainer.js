import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';


import NewRecipe from '../../components/recipes/NewRecipe';
import {addRecipe} from '../../actions/recipes';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({addRecipe, push}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRecipe);
