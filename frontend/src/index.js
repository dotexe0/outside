import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './js/store';

// import NavBar from './js/components/NavBar';

import App from './js/components/App';
import Home from './js/components/Home';
import About from './js/components/About';
// import Explore from './js/components/Explore';
import EventPage from './js/components/EventPage';
import SignupForm from './js/components/SignupForm';
import './css/index.css';

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/events" component={EventPage} />
        <Route path="/signup" component={SignupForm} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
