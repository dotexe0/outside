import React, { Component } from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';

import '../../css/Home.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

  const HomeWrapper = styled.div`
    align-items: center;
    justify-content: flex-start;
    flex-diretion: column;
    flex: 1;
    color: red;
  `;

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
      <NavBar />
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Outside</h2>
        </div>
        <p className="Home-intro">
          <code>Book your next event with Outside</code>
        </p>
        <div>
        <ul>
          <li className="card">Create a new Event</li>
          <li>Review an existing event</li>
          <li>Have an event ID?</li>
        </ul>
          <SearchBar />
        </div>
        {this.props.children}
      </HomeWrapper>
    );
  }
}

export default Home;


//Client Token: gAAAAABYyC1JvlxSq5rooQLqAkakeBpJnZHDLX7y-YujFfJPoLXtJ3KF3X1uW9fbIxhT73cxBn8P_T4QqwvPVnLSUhZgF_YjhA_iWtM3ca9yrEILuDefIFU4OigFSR52FVhjfG8nZSSHGWIdIneDCDftwxeu-G35NokGKyWB1bvr3ciAFx3eVso=
//Client Secret: GRETvJSoiwGSDZBOuIQL_Rc7pbSNzgR3
