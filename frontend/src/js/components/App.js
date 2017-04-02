import React, { Component } from 'react';
import  NavBar from './NavBar';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
    <div>
      <NavBar />
      {this.props.children}
    </div>
    );
  }
}
