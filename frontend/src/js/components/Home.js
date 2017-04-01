import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';


class Home extends Component {

  _updateText =  () => {

  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron" bsStyle='info'>
            <h1 className="text-center">Outside</h1>
          </div>

          <p className="text-center">
            <h2>Create Outside</h2>
          </p>

          <div className="text-center">
            <ul className="list-unstyled">
              <li className="card"><h3>Creating events has never been easier!</h3></li>
              <li><h4>Invite your friends, colleagues, and enemies all within the same app.</h4></li>
            </ul>
          </div>

      </div>
        {this.props.children}
      </div>
    );
  }
}

export default Home;


//Client Token: gAAAAABYyC1JvlxSq5rooQLqAkakeBpJnZHDLX7y-YujFfJPoLXtJ3KF3X1uW9fbIxhT73cxBn8P_T4QqwvPVnLSUhZgF_YjhA_iWtM3ca9yrEILuDefIFU4OigFSR52FVhjfG8nZSSHGWIdIneDCDftwxeu-G35NokGKyWB1bvr3ciAFx3eVso=
//Client Secret: GRETvJSoiwGSDZBOuIQL_Rc7pbSNzgR3
