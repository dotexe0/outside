import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { getAllEvents, logout } from '../actions';
import { browserHistory } from 'react-router';

import '../../css/NavBar.css';

class NavBar extends Component {

  _getAllEvents = () => {
    this.props.getAllEvents();
    // console.log('getting...')
  }

_logUserOut = () => {
  this.props.logout();
  browserHistory.push('/');
}

  render() {
    // console.log('this.props: ', this.props);
      return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Outside</Link>
          </div>
            <div className="collapse navbar-collapse" id="bs-navbar-collapse-1">
              <ul className="nav navbar-nav">
              {this.props.user.user.isAuthenticated ? (
                <li><Link to="/createEvent">Create Event<span></span></Link></li>
              ) : (
                null
              )}
                <li><Link to="/events">Public Events<span></span></Link></li>
                <li><Link to="/myEvents">My Events<span></span></Link></li>
                <li><Link to="/about">About</Link></li>
                {this.props.user.user.isAuthenticated ? (
                  <li className="pull-right" onClick={this._logUserOut}><Link >Logout</Link><span></span></li>
                ) : ([
                  <li key={1} className="pull-right"><Link to="/login">Login<span></span></Link></li>,
                  <li key={2} className="pull-right"><Link to="/signup">Signup<span></span></Link></li>
                ])}


              </ul>
            </div>
          </div>
        </nav>
    );
  };
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, { getAllEvents, logout })(NavBar);
