import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'
import store from './js/store';

// import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './js/components/App';
import Home from './js/components/Home';
import FormComponent from './js/components/FormComponent';
import EventPage from './js/components/EventPage';
import MyEventsPage from './js/components/MyEventsPage';
import SignupForm from './js/components/SignupForm';
import LoginForm from './js/components/LoginForm';
import './css/index.css';

// injectTapEventPlugin();

const routes = (
  <Provider store={store}>
  <div>
    <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar/>

      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/createEvent" component={FormComponent} />
          <Route path="/events" component={EventPage} />
          <Route path="/myEvents" component={MyEventsPage} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/login" component={LoginForm} />
        </Route>
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
