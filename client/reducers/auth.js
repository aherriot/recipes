import actionTypes from '../constants/actionTypes';

const defaultState = {
  username: localStorage.getItem('username'),
  token: localStorage.getItem('token')
}

export default function auth(state = defaultState, action) {
  switch(action.type) {
  case actionTypes.LOGIN_SUCCESS:
    return {...state,
      username: action.payload.username,
      token: action.payload.token
    };
  case actionTypes.LOGIN_ERROR:
    return {...state,
      username: undefined,
      token: undefined
    };

  case actionTypes.LOGOUT:
    return {...state,
      username: undefined,
      token: undefined
    };

  case actionTypes.CREATE_ACCOUNT_PENDING:
    return {...state

    };

  case actionTypes.CREATE_ACCOUNT_SUCCESS:
    return {
      username: action.payload.username,
      token: action.payload.token
    };

  case actionTypes.CREATE_ACCOUNT_ERROR:
    return {...state,
      username: undefined,
      token: undefined
    };

  default:
    return state;
  }
}
