import React, { Component } from 'react';
import styled from 'styled-components';

import '../../css/Home.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

  const HomeWrapper = styled.div`

  `;

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <NavBar />
        <SearchBar />

        <div className="Home-header">
          <h2 className="text-center">Outside</h2>
        </div>

        <p className="text-center">
          <code>Book your next event with Outside</code>
        </p>

        <div className="text-center">
          <ul className="list-unstyled">
            <li className="card">Create a new Event</li>
            <li>Review an existing event</li>
            <li>Have an event ID?</li>
          </ul>
        </div>

      <div className="text-center">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-block">
                <h3 className="card-title">Create a new Event</h3>
                <p className="card-text">...</p>
                <a href="#" className="btn btn-primary">Create</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-block">
                <h3 className="card-title">Find an existing Event</h3>
                <p className="card-text">...</p>
                <a href="#" className="btn btn-primary">Find Event</a>
              </div>
            </div>
          </div>
          </div>
        </div>
        {this.props.children}
      </HomeWrapper>
    );
  }
}

export default Home;


//Client Token: gAAAAABYyC1JvlxSq5rooQLqAkakeBpJnZHDLX7y-YujFfJPoLXtJ3KF3X1uW9fbIxhT73cxBn8P_T4QqwvPVnLSUhZgF_YjhA_iWtM3ca9yrEILuDefIFU4OigFSR52FVhjfG8nZSSHGWIdIneDCDftwxeu-G35NokGKyWB1bvr3ciAFx3eVso=
//Client Secret: GRETvJSoiwGSDZBOuIQL_Rc7pbSNzgR3
