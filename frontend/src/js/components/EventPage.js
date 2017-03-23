import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllEvents, deleteEvent } from '../actions';
import Event from './Event';

class EventPage extends Component {
  state = { loading: false }

  async componentDidMount() {
    this.setState({ loading: true })
    await this.props.getAllEvents();
    this.setState({ loading: false })
  }

  render() {

    if (this.state.loading) {
      return <h1>Loading...</h1>
    }
    return (
      <div>{this.props.events.map((event, i) => (
        <Event key={i} {...event} deleteEvent={this.props.deleteEvent}/>
      ))}</div>
    )
  }
}



export default connect(
  state => ({
    events: state.events
   }),
  {getAllEvents, deleteEvent}
)(EventPage);
