import React, { Component } from 'react';
import { connect } from 'react-redux';
// import styled from 'styled-components';
// import { Button } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { login } from '../actions';

class Home extends Component {

  _guestLogin =  (e) => {
    e.preventDefault();
    this.props.login("guest", "password");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron">
            <h1 className="text-center">Outside</h1>
          </div>

          <h2><p className="text-center">
            Create Outside
          </p></h2>

          <div className="text-center">
            <ListGroup className="list-unstyled">
              <ListGroupItem><h3>Creating events has never been easier!</h3></ListGroupItem>
              <ListGroupItem><h4>Invite your friends, colleagues, and enemies all within the same app.</h4></ListGroupItem>
                <ListGroupItem bsStyle="info">
                <RaisedButton label="Demo" onClick={this._guestLogin}/>
                <Link to="/signup"><RaisedButton label="Signup" /></Link>
                <Link to="/login"><RaisedButton label="Login" /></Link>
                </ListGroupItem>
            </ListGroup>
          </div>

      </div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user
   }),
  { login }
)(Home);

//Client Token: gAAAAABYyC1JvlxSq5rooQLqAkakeBpJnZHDLX7y-YujFfJPoLXtJ3KF3X1uW9fbIxhT73cxBn8P_T4QqwvPVnLSUhZgF_YjhA_iWtM3ca9yrEILuDefIFU4OigFSR52FVhjfG8nZSSHGWIdIneDCDftwxeu-G35NokGKyWB1bvr3ciAFx3eVso=
//Client Secret: GRETvJSoiwGSDZBOuIQL_Rc7pbSNzgR3
