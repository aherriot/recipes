import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Recipe from '../components/recipes/Recipe';
import {fetchRecipe} from '../actions/recipes';

function mapStateToProps(state) {
  return {recipes: state.recipes};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({fetchRecipe}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
