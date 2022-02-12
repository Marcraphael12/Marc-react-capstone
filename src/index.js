import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './redux/configureStore';
import { loadDataThunk } from './redux/covid/covid';

import './scss/index.scss';
import './css/index.css';

store.dispatch(loadDataThunk());

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
