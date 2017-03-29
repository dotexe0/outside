import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUserEvents, deleteEvent } from '../actions';
import Event from './Event';
import { Button } from 'react-bootstrap';

class MyEventsPage extends Component {
  state = { loading: false }

  async componentDidMount() {
    this.setState({ loading: true })
    await this.props.getAllUserEvents();
    this.setState({ loading: false })
  }
   _deleteEvent = () => {
    this.props.deleteEvent(this.props.user.events._id);
  }

  render() {
    console.log('props: ', this.props.user.events);

    if (this.state.loading) {
      return <h1>Loading...</h1>
    }
    if (!this.props.user.events) {
      return (
        <h2>No Events created yet..</h2>
      )
    }
    return (
      <div>{this.props.user.events.map((event, i) => (
        <div className="col-xs-12 col-md-4 col-md-offset-1" key={i}>
        <Event key={i} {...event} deleteEvent={this._deleteEvent}/>
        <Button bsStyle="danger" onClick={this._deleteEvent}>Delete</Button>
        </div>
      ))}
      </div>
    )
  }
}



export default connect(
  state => ({
    user: {
    events: state.user.events
    }
   }),
  {getAllUserEvents, deleteEvent}
)(MyEventsPage);
