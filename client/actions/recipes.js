import actionTypes from '../constants/actionTypes';
import { checkHttpStatus, parseJSON, getHeaders, request } from '../utils';
import { push } from 'react-router-redux';
import { logoutAndRedirect }  from './auth';

function fetchRecipesPending() {
  return {
    type: actionTypes.FETCH_RECIPES_PENDING
  };
}

function fetchRecipesSuccess(recipes) {
  return {
    type: actionTypes.FETCH_RECIPES_SUCCESS,
    payload: recipes
  }
}

function fetchRecipesError(error) {
  return {
    type: actionTypes.FETCH_RECIPES_ERROR,
    payload: error
  };
}

export function fetchRecipes() {
  return function(dispatch) {
    dispatch(fetchRecipesPending());

    return request('/recipes')
      .then(response => {
        dispatch(fetchRecipesSuccess(response));
      })
      .catch(error => {
        if(error.message === 'Unauthorized') {
          dispatch(logoutAndRedirect());
        } else {
          dispatch(fetchRecipesError(error));
        }
      })
  }
}

function fetchRecipePending() {
  return {
    type: actionTypes.FETCH_RECIPE_PENDING
  };
}

function fetchRecipeSuccess(response) {
  return {
    type: actionTypes.FETCH_RECIPE_SUCCESS,
    payload: response
  }
}

function fetchRecipeError(error) {
  return {
    type: actionTypes.FETCH_RECIPE_ERROR,
    payload: error
  };
}

export function fetchRecipe(recipe_id) {
  return function(dispatch) {

    dispatch(fetchRecipePending());

    return request('/recipes/' + recipe_id)
    .then(response => {
      dispatch(fetchRecipeSuccess(response));
    })
    .catch(error => {
      dispatch(fetchRecipeError(error));
    })
  }
}

function addRecipePending() {
  return {
    type: actionTypes.ADD_RECIPE_PENDING
  };
}

function addRecipeSuccess(response) {
  return {
    type: actionTypes.ADD_RECIPE_SUCCESS,
    payload: response
  };
}

function addRecipeError(error) {
  return {
    type: actionTypes.ADD_RECIPE_ERROR,
    payload: error
  };
}

export function addRecipe(title, description) {
  return function(dispatch) {

    dispatch(addRecipePending());

    return request('/recipes', 'POST', {
      title: title,
      description: description
    })
    .then(response => {
      dispatch(addRecipeSuccess(response));
      dispatch(push('/recipes'));
    })
    .catch(error => {
        dispatch(addRecipeFailure(error));
    })
  }
}

function editRecipePending() {
  return {
    type: actionTypes.EDIT_RECIPE_PENDING
  };
}

function editRecipeSuccess(response) {
  return {
    type: actionTypes.EDIT_RECIPE_SUCCESS,
    payload: response
  };
}

function editRecipeError(error) {
  return {
    type: actionTypes.EDIT_RECIPE_ERROR,
    payload: error
  };
}

export function editRecipe(recipe_id, title, description) {
  return function(dispatch) {

    dispatch(editRecipePending());

    request('/recipes/'+recipe_id, 'PUT', {title, description})
    .then(response => {
      dispatch(editRecipeSuccess());
      dispatch(push('/recipes'));
    })
    .catch(error => {
        dispatch(editRecipeError(error));
    })
  }
};

function deleteRecipePending() {
  return {
    type: actionTypes.DELETE_RECIPE_PENDING
  };
}

function deleteRecipeSuccess() {
  return {
    type: actionTypes.DELETE_RECIPE_SUCCESS
  };
}

function deleteRecipeError(error) {
  return {
    type: actionTypes.DELETE_RECIPE_ERROR,
    payload: error
  };
}

export function deleteRecipe(recipe_id) {
  return function(dispatch) {

    dispatch(deleteRecipePending());

    request('/recipes/'+recipe_id, 'DELETE')
    .then(response => {
      dispatch(deleteRecipeSuccess());
      dispatch(push('/recipes'));
    })
    .catch(error => {
        dispatch(deleteRecipeError(error));
    })
  }
};
