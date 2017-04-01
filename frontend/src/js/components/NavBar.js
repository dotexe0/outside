import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { getAllEvents, logout } from '../actions';
import { browserHistory } from 'react-router';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class NavBar extends Component {

  _getAllEvents = () => {
    this.props.getAllEvents();
  }

_logUserOut = () => {
  this.props.logout();
  browserHistory.push('/');
}

  render() {
      return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Outside</Link>
          </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.props.user.user.isAuthenticated ? (
                  <NavItem><Link to="/createEvent">Create Event</Link></NavItem>
                ) : (
                  null
                )}
            <NavItem><Link to="/events">Public Events</Link></NavItem>
            <NavItem><Link to="/myEvents">My Events</Link></NavItem>
            <NavItem><Link to="/about">About</Link></NavItem>
          </Nav>
          <Nav pullRight>
            {this.props.user.user.isAuthenticated ? (
              <NavItem onClick={this._logUserOut}><Link to="/logout">Logout</Link></NavItem>
            ) : ([
              <NavItem key={1}><Link to="/login">Login</Link></NavItem>,
              <NavItem key={2}><Link to="/signup">Signup</Link></NavItem>
            ])}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, { getAllEvents, logout })(NavBar);
