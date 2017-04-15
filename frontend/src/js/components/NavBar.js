import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getAllEvents, logout, login } from '../actions';
import { browserHistory } from 'react-router';
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap';
import '../../css/Navbar.css';
class NavBar extends Component {

  _getAllEvents = () => {
    this.props.getAllEvents();
  }

  _guestLogin =  (e) => {
  e.preventDefault();
  this.props.login("guest", "password");
}

_logUserOut = () => {
  this.props.logout();
  browserHistory.push('/');
}

  render() {
      return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
         <Navbar.Brand >
            <h5 onClick={() => browserHistory.push('/')}>Outside</h5>
          </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.props.user.user.isAuthenticated ? (
                  <NavItem onClick={() => browserHistory.push('/createEvent')}>
                    <Button bsStyle="primary">Create Event</Button>
                  </NavItem>
                ) : (
                  null
                )}
            <NavItem onClick={() => browserHistory.push('/events')}>
              <Button bsStyle="primary">Public Event</Button>
            </NavItem>
            <NavItem onClick={() => browserHistory.push('/myEvents')}>
              <Button bsStyle="primary">My Event</Button>
            </NavItem>
          </Nav>
          <Nav pullRight>
            {this.props.user.user.isAuthenticated ? (
              <NavItem onClick={this._logUserOut}>
              <Button bsStyle="primary">Logout</Button>
              </NavItem>
            ) : ([
              <NavItem key={1} onClick={this._guestLogin}>
                <Button bsStyle="primary">Demo</Button>
              </NavItem>,
              <NavItem key={2} onClick={() => browserHistory.push('/login')}>
                <Button bsStyle="primary">Login</Button>
              </NavItem>,
              <NavItem key={3} onClick={() => browserHistory.push('/signup')}>
                <Button bsStyle="primary">Signup</Button>
              </NavItem>

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

export default connect(mapStateToProps, { getAllEvents, logout, login })(NavBar);
