import React, { Component } from 'react';
import  NavBar from './NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
    <div>
      <NavBar />
      {this.props.children}
    </div>
    </MuiThemeProvider>
    );
  }
}
