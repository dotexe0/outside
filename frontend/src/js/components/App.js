import React, { Component } from 'react';
import  NavBar from './NavBar';

export default class App extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
