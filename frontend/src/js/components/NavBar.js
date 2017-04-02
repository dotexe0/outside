import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { getAllEvents, logout } from '../actions';
import { browserHistory } from 'react-router';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

class NavBar extends Component {

  _getAllEvents = () => {
    this.props.getAllEvents();
  }

_logUserOut = () => {
  this.props.logout();
  browserHistory.push('/');
}

  render() {

    const styles = {
    smallIcon: {
      width: 36,
      height: 30,
      color: 'white'
    },
    small: {
      width: 72,
      height: 50,
      padding: 0
      }
  };
      return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
            <IconButton
              iconStyle={styles.smallIcon}
              style={styles.small}
            >
              <ActionHome />
            </IconButton>
            </Link>
          </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.props.user.user.isAuthenticated ? (
                  <NavItem><Link to="/createEvent"><RaisedButton label="Create Event" /></Link></NavItem>
                ) : (
                  null
                )}
            <NavItem><Link to="/events"><RaisedButton label="Public Events" /></Link></NavItem>
            <NavItem><Link to="/myEvents"><RaisedButton label="My Events" /></Link></NavItem>
          </Nav>
          <Nav pullRight>
            {this.props.user.user.isAuthenticated ? (
              <NavItem onClick={this._logUserOut}><Link to="/logout"><RaisedButton label="Logout" /></Link></NavItem>
            ) : ([
              <NavItem key={1}><Link to="/login"><RaisedButton label="Login" /></Link></NavItem>,
              <NavItem key={2}><Link to="/signup"><RaisedButton label="Signup" /></Link></NavItem>
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
