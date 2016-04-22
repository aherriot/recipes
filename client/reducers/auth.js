import actionTypes from '../constants/actionTypes';



const defaultState = {
  // loggedIn: false,
  username: localStorage.getItem('username'),
  token: localStorage.getItem('token')
}

export default function auth(state = defaultState, action) {
  switch(action.type) {
  case actionTypes.LOGIN_SUCCESS:
    return {...state,
      // loggedIn: true,
      username: action.payload.username,
      token: action.payload.token
    };
  case actionTypes.LOGIN_ERROR:
    return {...state,
      // loggedIn: false,
      username: undefined,
      token: undefined
    };

  case actionTypes.LOGOUT:
    return {
      username: undefined,
      token: undefined
    };
  default:
    return state;
  }
}
