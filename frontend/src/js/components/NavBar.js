import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../css/NavBar.css';

class NavBar extends Component {
  render() {
      return (
      <div>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Outside</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/explore">Events<span className="sr-only"></span></Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          </div>
        </nav>
        <div className="container">
        </div>
      </div>
    );
  };
};
export default NavBar;
