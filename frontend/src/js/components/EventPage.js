import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPublicEvents } from '../actions';
import Event from './Event';
import { ProgressBar } from 'react-bootstrap';

class EventPage extends Component {
  state = { loading: false }

  async componentDidMount() {
    this.setState({ loading: true })
    await this.props.getAllPublicEvents();
    this.setState({ loading: false })
  }

  render() {
    console.log(this.props);
    if (this.state.loading) {
      return (
        <div className="col-xs-6 col-xs-offset-4 col-md-4 col-md-offset-4">
        <h1>Loading ... </h1>
          <ProgressBar active now={45} />
        </div>
      );
    }
    if (this.props.user.publicEvents.length === 0) {
      return (
        <h2>No Events created yet..</h2>
      );
    }
    return (
      <div>
        <div>{this.props.user.publicEvents.map((event, i) => (
          <Event key={i} {...event} />
        ))}</div>
      </div>
    );
  }
}



export default connect(
  state => ({
    ...state
   }),
  {getAllPublicEvents}
)(EventPage);
