import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../css/App.css';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Outside</h2>
        </div>
        <p className="App-intro">
          <code>Book your next event with Outside</code> 
        </p>
        <div>
          <li>Create a new Event</li>
          <li>Review an existing event</li>
          <li>Have an event ID?</li>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;


//Client Token: gAAAAABYyC1JvlxSq5rooQLqAkakeBpJnZHDLX7y-YujFfJPoLXtJ3KF3X1uW9fbIxhT73cxBn8P_T4QqwvPVnLSUhZgF_YjhA_iWtM3ca9yrEILuDefIFU4OigFSR52FVhjfG8nZSSHGWIdIneDCDftwxeu-G35NokGKyWB1bvr3ciAFx3eVso=
//Client Secret: GRETvJSoiwGSDZBOuIQL_Rc7pbSNzgR3
