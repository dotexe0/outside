import React, { Component } from 'react';
// import {connect} from 'react-redux';
import Event from './Event';
class Explore extends Component {


  render() {
    console.log('this.props', this.props);
      // const { description, eventName, invited, time } = this.props;

    return (
      <div>
        <h1 className="jumbotron">Explore Outside</h1>
          <h2>See all events:</h2>
          <Event />
      </div>
    );
  }
};

// const mapStateToProps = state => ({
//   ...state
// });

// export default connect(mapStateToProps)(Explore);

