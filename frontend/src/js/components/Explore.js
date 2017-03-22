import React, { Component } from 'react';
import {connect} from 'react-redux';

class Explore extends Component {
  state = {
    events: []
  }

  render() {
    return (
      <div>
        <h1 className="jumbotron">Explore Outside</h1>
          <h2>See all events:</h2>
          {this.props.events}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Explore);

