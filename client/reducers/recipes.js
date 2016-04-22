import actionTypes from '../constants/actionTypes';

const defaultState = {
  loaded: false,
  recipes: [],
  recipeDetail: {},
  error: null
}

export default function auth(state = defaultState, action) {
  switch(action.type) {
  case actionTypes.FETCH_RECIPES_PENDING:
    return {...state, loaded: false};
  case actionTypes.FETCH_RECIPES_SUCCESS:
    return {...state,
      loaded: true,
      recipes: action.payload
    };
  case actionTypes.FETCH_RECIPES_ERROR:
    return {...state,
      loaded: false,
      error: action.payload
    };

  case actionTypes.FETCH_RECIPE_PENDING:
    return {...state, loaded: false};
  case actionTypes.FETCH_RECIPE_SUCCESS:
    return {...state,
      loaded: true,
      recipeDetail: action.payload
    };
  case actionTypes.FETCH_RECIPE_ERROR:
    return {...state,
      loaded: false,
      error: action.payload
    };
  default:
    return state;
  }
}
