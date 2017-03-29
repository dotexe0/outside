import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { getAllEvents } from '../actions';

import '../../css/NavBar.css';

class NavBar extends Component {

  _getAllEvents = () => {
    this.props.getAllEvents();
    console.log('getting...')
  }

  render() {
      return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Outside</Link>
          </div>
            <div className="collapse navbar-collapse" id="bs-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/events">Public Events<span></span></Link></li>
                <li><Link to="/myEvents">My Events<span></span></Link></li>
                <li><Link to="/about">About</Link></li>
                <li className="pull-right"><Link to="/login">Login<span></span></Link></li>
                <li className="pull-right"><Link to="/signup">Signup<span></span></Link></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  };
};

const mapStateToProps = state => ({
  ...state
});

// export default connect(mapStateToProps, { searchGame })(SearchBar);
export default connect(mapStateToProps, { getAllEvents })(NavBar);
