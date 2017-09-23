import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import orderForm from './reducers/orderForm';

const rootReducer = combineReducers({
  orderForm
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger, promise()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
