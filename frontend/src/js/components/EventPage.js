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
    console.log(this.props);
    if (this.state.loading) {
      return <h1>Loading...</h1>
    }
    if (this.props.user.publicEvents.length === 0) {
      return (
        <h2>No Events created yet..</h2>
      )
    }
    return (
      <div>{this.props.user.publicEvents.map((event, i) => (
        <Event key={i} {...event} />
      ))}</div>
    )
  }
}



export default connect(
  state => ({
    ...state
   }),
  {getAllPublicEvents}
)(EventPage);
