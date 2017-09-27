import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import orderForm from './reducers/orderForm';

const rootReducer = combineReducers({
  orderForm
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promise(), logger))
);

export default store;
