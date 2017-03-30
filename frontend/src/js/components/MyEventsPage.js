import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUserEvents, deleteEvent } from '../actions';
import Event from './Event';
import { Button } from 'react-bootstrap';

class MyEventsPage extends Component {
  state = { loading: false }

  async componentDidMount() {
    this.setState({ loading: true })
    console.log('props userID', this.props.user._id);
    await this.props.getAllUserEvents(this.props.user._id);
    this.setState({ loading: false })
  }
   _deleteEvent = () => {
     console.log(this.props.user.events);
    this.props.deleteEvent(this.props.user.events._id);
  }

  render() {
    console.log('props: ', this.props);

    if (this.state.loading) {
      return <h1>Loading...</h1>
    }
    if (!this.props.user.events || this.props.user.events.length === 0) {
      return (
        <h2>No events created yet.</h2>
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
    ...state
   }),
  {getAllUserEvents, deleteEvent}
)(MyEventsPage);
