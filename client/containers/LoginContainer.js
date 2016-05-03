import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Login from '../components/auth/Login';
import {login, logout} from '../actions/auth';

function mapStateToProps(state) {
  return {auth: state.auth};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({login, logout}, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
