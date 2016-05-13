import actionTypes from '../constants/actionTypes';
import statuses from '../constants/statuses';


const defaultState = {
  status: statuses.INIT,
  username: localStorage.getItem('username'),
  token: localStorage.getItem('token'),
  error: undefined
}

export default function auth(state = defaultState, action) {
  switch(action.type) {

  case actionTypes.LOGIN_PENDING:
    return {...state,
      status: statuses.PENDING
    };

  case actionTypes.LOGIN_SUCCESS:
    return {...state,
      status: statuses.SUCCESS,
      username: action.payload.username,
      token: action.payload.token,
      error: undefined
    };
  case actionTypes.LOGIN_ERROR:
    return {...state,
      status: statuses.ERROR,
      username: undefined,
      token: undefined,
      error: action.payload.error
    };

  case actionTypes.LOGOUT:
    return {...state,
      username: undefined,
      token: undefined
    };

  case actionTypes.CREATE_ACCOUNT_PENDING:
    return {...state,
      status: statuses.PENDING
    };

  case actionTypes.CREATE_ACCOUNT_SUCCESS:
    return {
      status: statuses.SUCCESS,
      username: action.payload.username,
      token: action.payload.token
    };

  case actionTypes.CREATE_ACCOUNT_ERROR:
    return {...state,
      status: statuses.ERROR,
      username: undefined,
      token: undefined
    };

  default:
    return state;
  }
}
