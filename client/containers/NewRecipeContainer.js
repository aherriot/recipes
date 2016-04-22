import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Recipes from '../components/recipes/NewRecipe';
import {addRecipe} from '../actions/recipes';

function mapStateToProps(state) {
  return {recipes: state.recipes};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({addRecipe}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes);
