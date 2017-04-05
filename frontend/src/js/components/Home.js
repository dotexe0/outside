import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/Home.css'
// import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { login } from '../actions';

class Home extends Component {

  _guestLogin =  (e) => {
    e.preventDefault();
    this.props.login("guest", "password");
  }

  render() {
     const styles = {
    smallIcon: {
      width: 36,
      height: 30,
      color: 'white'
    },
    small: {
      padding: 0,
      backgroundColor: '#457B9D'
      }
  };

    return (
      <div>
        <div className="container col-xs-6 col-xs-offset-4 col-md-4 col-md-offset-4">
          <div className="jumbotron "  style={styles.small}>
            <h1 className="text-center">Outside</h1>
          </div>

          <h2><p className="text-center">
            <ListGroupItem>An app for keeping track of your events and meetings.</ListGroupItem>
          </p></h2>

          <div className="text-center">
            <ListGroup className="list-unstyled">
              <ListGroupItem><h3>Create and manage your events in one place.</h3></ListGroupItem>
              <ListGroupItem><h4>Make them public for everyone to see or keep them private.</h4></ListGroupItem>
                <ListGroupItem bsStyle="info">
                <Button bsStyle="primary" onClick={this._guestLogin} style={{marginRight: '15px'}}>Demo</Button>
                <Link to="/signup"><Button bsStyle="primary" style={{marginRight: '15px'}}>Signup</Button></Link>
                <Link to="/login"><Button bsStyle="primary" style={{marginRight: '15px'}}>Login</Button></Link>
                </ListGroupItem>
            </ListGroup>
          </div>

      </div>
        {this.props.children}
        <div className="footer">
        </div>
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
