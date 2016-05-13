import actionTypes from '../constants/actionTypes';
import statuses from '../constants/statuses';

const defaultState = {
  status: statuses.INIT,
  recipes: [],
  recipeDetail: {},
  error: undefined
}

export default function auth(state = defaultState, action) {
  switch(action.type) {
    //Fetch All
  case actionTypes.FETCH_RECIPES_PENDING:
    return {...state,
      status: statuses.PENDING
    };
  case actionTypes.FETCH_RECIPES_SUCCESS:
    return {...state,
      status: statuses.SUCCESS,
      recipes: action.payload
    };
  case actionTypes.FETCH_RECIPES_ERROR:
    return {...state,
      status: statuses.ERROR,
      error: action.payload
    };

    //Fetch one
  case actionTypes.FETCH_RECIPE_PENDING:
    return {...state,
      status: statuses.PENDING
    };
  case actionTypes.FETCH_RECIPE_SUCCESS:
    return {...state,
      status: statuses.SUCCESS,
      recipeDetail: action.payload
    };
  case actionTypes.FETCH_RECIPE_ERROR:
    return {...state,
      status: statuses.ERROR,
      error: action.payload
    };

    //Add
  case actionTypes.ADD_RECIPE_PENDING:
    return {...state,
      status: statuses.PENDING
    };
  case actionTypes.ADD_RECIPE_SUCCESS:
    return {...state,
      status: statuses.SUCCESS,
      recipeDetail: action.payload
    };
  case actionTypes.ADD_RECIPE_ERROR:
    return {...state,
      status: statuses.ERROR,
      error: action.payload
    };

    //Edit
  case actionTypes.START_EDIT_RECIPE:
    return {...state,
      status: statuses.EDITING
    };

  case actionTypes.REVERT_RECIPE:
    return {...state,
      status: statuses.SUCCESS
    };
  case actionTypes.EDIT_RECIPE_PENDING:
    return {...state,
      status: statuses.PENDING
    };
  case actionTypes.EDIT_RECIPE_SUCCESS:
    return {...state,
      status: statuses.SUCCESS,
      recipeDetail: action.payload
    };
  case actionTypes.EDIT_RECIPE_ERROR:
    return {...state,
      status: statuses.ERROR,
      error: action.payload
    };


    //Delete
  case actionTypes.DELETE_RECIPE_PENDING:
    return {...state,
      status: statuses.PENDING
    };
  case actionTypes.DELETE_RECIPE_SUCCESS:
    return {...state,
      status: statuses.SUCCESS,
    };
  case actionTypes.DELETE_RECIPE_ERROR:
    return {...state,
      status: statuses.ERROR,
      error: action.payload
    };


  default:
    return state;
  }
}
