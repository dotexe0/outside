import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './js/store';

// import NavBar from './js/components/NavBar';
import Home from './js/components/Home';
import About from './js/components/About';
import Explore from './js/components/Explore';
import './css/index.css';

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/explore" component={Explore} />
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
