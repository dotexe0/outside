import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';

import App from './js/components/App';
import './css/index.css';

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('root'));
