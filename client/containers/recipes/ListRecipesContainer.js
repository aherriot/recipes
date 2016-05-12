import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Recipes from '../../components/recipes/ListRecipes';
import {fetchRecipes} from '../../actions/recipes';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({fetchRecipes}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipes);
