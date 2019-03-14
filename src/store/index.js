import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { reducer as formReducer } from 'redux-form';

import client from 'store/client';
import elements from 'store/elements';
import { isWindowUndefined, getWindow } from 'utils/index';

const history = isWindowUndefined() ? createMemoryHistory() : createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

export const reducers = combineReducers({
  router: connectRouter(history),
  form: formReducer,
  client,
  elements,
});

const composeEnhancers =
  getWindow().__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, historyMiddleware)),
);

export { history };
