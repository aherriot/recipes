import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import recipes from './recipes';

const rootReducer = combineReducers({
  auth: auth,
  recipes: recipes,
  routing: routerReducer
});

export default rootReducer;
