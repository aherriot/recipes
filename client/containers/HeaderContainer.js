import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AppBanner from '../components/AppBanner';
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
)(AppBanner);
