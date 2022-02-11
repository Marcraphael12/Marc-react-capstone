import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { covidReducer } from './covid/covid';

const reducer = combineReducers({
  covidReducer,
});

const middleware = [logger, thunk];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

export default store;
