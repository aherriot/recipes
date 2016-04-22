import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


export default function configureStore(history) {
  const enhancer = applyMiddleware(thunk, routerMiddleware(history));

  return createStore(rootReducer, undefined, enhancer);
}
