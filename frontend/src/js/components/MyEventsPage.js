import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getAllUserEvents, deleteEvent } from '../actions';
import Event from './Event';
import { Button } from 'react-bootstrap';

class MyEventsPage extends Component {
  state = { loading: false }

  async componentDidMount() {
    this.setState({ loading: true })
    await this.props.getAllUserEvents(this.props.user.user._id);
    this.setState({ loading: false })
  }
   _deleteEvent = (id) => {
     console.log('delete ID: ', id);
    this.props.deleteEvent(id);
  }

  render() {
    console.log('props: ', this.props);

    if (this.state.loading) {
      return <h1 className="col-xs-12 col-md-4 col-md-offset-4">Loading...</h1>
    }
    if (!this.props.user.user.events || this.props.user.user.events.length === 0) {
      return (
        <div className="col-xs-12 col-md-4 col-md-offset-4">
          <h2>No events created yet.</h2>
          <h3>Are you logged in?</h3><br />
          <Link to='/login'><Button bsStyle="success">Login</Button></Link>

        </div>
      )
    }
    return (
      <div>{this.props.user.user.events.map((event, i) => (
        <div className="col-xs-12 col-md-4 col-md-offset-1" key={i}>
        {console.log('event: ', event)}
        <Event key={i} {...event} />
        <Button bsStyle="danger" onClick={() => this._deleteEvent(event._id)}>Delete</Button>
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
