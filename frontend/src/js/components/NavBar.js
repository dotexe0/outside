import React, { Component } from 'react';
// import { Link } from 'react-router';
import {connect} from 'react-redux';
import { getAllEvents, logout } from '../actions';
import { browserHistory } from 'react-router';
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap';
// import RaisedButton from 'material-ui/RaisedButton';
// import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';

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
            <h5 onClick={() => browserHistory.push('/')}>Outside</h5>
          </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.props.user.user.isAuthenticated ? (
                  <NavItem onClick={() => browserHistory.push('/createEvent')}>
                    <Button bsStyle="default">Create Event</Button>
                  </NavItem>
                ) : (
                  null
                )}
            <NavItem onClick={() => browserHistory.push('/events')}>
              <Button bsStyle="default">Public Event</Button>
            </NavItem>
            <NavItem onClick={() => browserHistory.push('/myEvents')}>
              <Button bsStyle="default">My Event</Button>
            </NavItem>
          </Nav>
          <Nav pullRight>
            {this.props.user.user.isAuthenticated ? (
              <NavItem onClick={this._logUserOut}>
              <Button bsStyle="default">Logout</Button>
              </NavItem>
            ) : ([
              <NavItem key={1} onClick={() => browserHistory.push('/login')}>
                <Button bsStyle="default">Login</Button>
              </NavItem>,
              <NavItem key={2} onClick={() => browserHistory.push('/signup')}>
                <Button bsStyle="default">Signup</Button>
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

export default connect(mapStateToProps, { getAllEvents, logout })(NavBar);


        // <Navbar.Header>
        //   <Navbar.Brand>
        //     <Link to="/">
        //     <IconButton
        //       iconStyle={styles.smallIcon}
        //       style={styles.small}
        //     >
        //       <ActionHome />
        //     </IconButton>
        //     </Link>
        //   </Navbar.Brand>
        // <Navbar.Toggle />
        // </Navbar.Header>
        // <Navbar.Collapse>
        //   <Nav>
        //     {this.props.user.user.isAuthenticated ? (
        //           <NavItem onClick={browserHistory.push('/createEvent')}><RaisedButton label="Create Event" /></NavItem>
        //         ) : (
        //           null
        //         )}
        //     <NavItem onClick={browserHistory.push('/events')}><RaisedButton label="Public Events" /></NavItem>
        //     <NavItem onClick={browserHistory.push('/myEvents')}><RaisedButton label="My Events" /></NavItem>
        //   </Nav>
        //   <Nav pullRight>
        //     {this.props.user.user.isAuthenticated ? (
        //       <NavItem onClick={this._logUserOut}><RaisedButton label="Logout" /></NavItem>
        //     ) : ([
        //       <NavItem key={1} onClick={browserHistory.push('/login')}><RaisedButton label="Login" /></NavItem>,
        //       <NavItem key={2} onClick={browserHistory.push('/signup')}><RaisedButton label="Signup" /></NavItem>
        //     ])}
        //   </Nav>
        // </Navbar.Collapse>
