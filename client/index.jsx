import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';

import configureStore from './store';

import App from './components/App';
import NoMatch from './components/NoMatch';
import DevTools from './components/DevTools';
import LoginContainer from './containers/LoginContainer';
import CreateAccountContainer from './containers/CreateAccountContainer';
import ListRecipesContainer from './containers/recipes/ListRecipesContainer';
import RecipeContainer from './containers/recipes/RecipeContainer';
import NewRecipeContainer from './containers/recipes/NewRecipeContainer';
import EditRecipeContainer from './containers/recipes/EditRecipeContainer';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="/login" component={LoginContainer} />
          <Route path="/createAccount" component={CreateAccountContainer} />

          <Route path="/recipes" component={ListRecipesContainer} />
          <Route path="/recipes/new" component={NewRecipeContainer} />
          <Route path="/recipes/:recipe_id/edit" component={EditRecipeContainer} />
          <Route path="/recipes/:recipe_id" component={RecipeContainer} />

          <Route path="*" component={NoMatch}/>

        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
