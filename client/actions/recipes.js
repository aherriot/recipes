import actionTypes from '../constants/actionTypes';
import { checkHttpStatus, parseJSON, getHeaders } from '../utils';

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
    return fetch('/api/recipes', {
      method: 'GET',
      headers: getHeaders(),
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      dispatch(fetchRecipesSuccess(response));
    })
    .catch(error => {
      dispatch(fetchRecipesError(error));
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
    return fetch('/api/recipes/' + recipe_id, {
      method: 'GET',
      headers: getHeaders(),
    })
    .then(checkHttpStatus)
    .then(parseJSON)
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
    type: actionTypes.ADD_RECIPE_SUCCESS
  };
}

function addRecipeError(error) {
  return {
    type: actionTypes.ADD_RECIPE_ERROR
  };
}

export function addRecipe(title, description) {
  return function(dispatch) {
    dispatch(addRecipePending());
    return fetch('/api/recipes', {
      method: 'post',
      headers: getHeaders(),
      body: JSON.stringify({title: title, description: description})
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      dispatch(addRecipeSuccess(response));
    })
    .catch(error => {
        dispatch(addRecipeFailure(error));
    })
  }
}
