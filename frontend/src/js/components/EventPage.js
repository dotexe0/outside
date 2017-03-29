import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPublicEvents } from '../actions';
import Event from './Event';

class EventPage extends Component {
  state = { loading: false }

  async componentDidMount() {
    this.setState({ loading: true })
    await this.props.getAllPublicEvents();
    this.setState({ loading: false })
  }

  render() {

    if (this.state.loading) {
      return <h1>Loading...</h1>
    }
    if (!this.props.publicEvents) {
      return (
        <h2>No Events created yet..</h2>
      )
    }
    return (
      <div>{this.props.publicEvents.map((event, i) => (
        <Event key={i} {...event} />
      ))}</div>
    )
  }
}



export default connect(
  state => ({
    publicEvents: state.publicEvents
   }),
  {getAllPublicEvents}
)(EventPage);
