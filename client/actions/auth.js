import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';

import actionTypes from '../constants/actionTypes';
import { checkHttpStatus, parseJSON } from '../utils';


export function loginSuccess(user) {
  localStorage.setItem('token', user.token);
  localStorage.setItem('username', user.username);

  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      username: user.username,
      token: user.token,
      test: true
    }
  }
}

export function loginError(error) {
  localStorage.removeItem('token');
  localStorage.removeItem('username');

  return {
    type: actionTypes.LOGIN_ERROR,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export function loginPending() {
  return {
    type: actionTypes.LOGIN_PENDING
  }
}

export function createAccountSuccess(user) {
  localStorage.setItem('token', user.token);
  localStorage.setItem('username', user.username);

  return {
    type: actionTypes.CREATE_ACCOUNT_SUCCESS,
    payload: {
      token: token
    }
  }
}

export function createAccountFailure(error) {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  return {
    type: actionTypes.CREATE_ACCOUNT_ERROR,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export function createAccountPending() {
  return {
    type: actionTypes.CREATE_ACCOUNT_PENDING
  }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    return {
        type: actionTypes.LOGOUT
    }
}

export function logoutAndRedirect(redirect = '/login') {
    return (dispatch, state) => {
        dispatch(logout());
        dispatch(push(redirect));
    }
}

export function login(username, password, redirect="/") {
    return function(dispatch) {
        dispatch(loginPending());
        return fetch('/api/login', {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({username: username, password: password})
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    dispatch(loginSuccess(response));
                    dispatch(push(redirect));
                } catch (e) {
                    dispatch(loginError({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                }
            })
            .catch(error => {
                dispatch(loginError(error));
            })
    }
}

export function createAccount(username, password, redirect="/") {
    return function(dispatch) {
        dispatch(createAccountPending());
        return fetch('/api/users', {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({username: username, password: password})
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    dispatch(createAccountSuccess(response.token));
                    dispatch(push(redirect));
                } catch (e) {
                    dispatch(createAccountFailure({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                }
            })
            .catch(error => {
                dispatch(createAccountFailure(error));
            })
    }
}
