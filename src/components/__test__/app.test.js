import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from '../../App';
import { covidReducer } from '../../Redux/covid/covid';

const reducer = combineReducers({
  covidReducer,

});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

describe('App', () => {
  it('renders ! ', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});