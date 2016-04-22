import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';

export default function configureStore(history) {

  const enhancer = compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    DevTools.instrument()
  );

  const store = createStore(rootReducer, undefined, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
