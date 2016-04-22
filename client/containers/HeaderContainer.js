import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../components/Header';
import {logoutAndRedirect} from '../actions/auth';

function mapStateToProps(state) {
  return {auth: state.auth};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({logoutAndRedirect}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
