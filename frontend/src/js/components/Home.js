import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/Home.css'
// import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import { login } from '../actions';

class Home extends Component {

  _guestLogin =  (e) => {
    e.preventDefault();
    this.props.login("guest", "password");
  }

  render() {
    return (
      <div>
        <section className="bg-primary" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-2 text-center">
                        <h1 className="section-heading">An app for keeping track of your events and meetings.</h1>
                        <hr className="light"></hr>
                        <h3 className="text-faded">Create and manage your events in one place. Make them public for everyone to see or keep them private.</h3>
                        <Button bsStyle="primary" onClick={this._guestLogin} style={{marginRight: '15px'}}>Demo</Button>
                        <Link to="/signup"><Button bsStyle="primary" style={{marginRight: '15px'}}>Signup</Button></Link>
                        <Link to="/login"><Button bsStyle="primary" style={{marginRight: '15px'}}>Login</Button></Link>
                    </div>
                </div>
            </div>
        </section>
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
