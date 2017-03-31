import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getAllUserEvents, deleteEvent } from '../actions';
import Event from './Event';
import { Button, Panel, ListGroupItem } from 'react-bootstrap';

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
    const noAccount = 'Need an account?';
    const notLoggedIn = 'You are not logged in.';
    if (this.state.loading) {
      return <h1 className="col-xs-6 col-xs-offset-2 col-md-4 col-md-offset-4">Loading...</h1>
    }
    if (!this.props.user.user.events || this.props.user.user.events.length === 0) {
      return (
        <div className="col-xs-6 col-xs-offset-2 col-md-4 col-md-offset-4">
          <ListGroupItem header="No events created yet.">
          </ListGroupItem>

          {this.props.user.user.isAuthenticated ? (
          <Panel header="No events created yet." bsStyle="primary">
            <Link to='/createEvent'><Button bsStyle="success">Create Event</Button></Link>
          </Panel>
          ) : (
          <span>
            <Panel header={notLoggedIn} bsStyle="primary">
              <Link to='/login'><Button bsStyle="success">Login</Button></Link>
            </Panel>
            <Panel header={noAccount} bsStyle="primary">
              <Link to='/signup'><Button bsStyle="success">Signup</Button></Link>
            </Panel>
          </span>
          )}
        </div>
      )
    }
    return (
      <div className="">
        {this.props.user.user.events.map((event, i) => (
        <div key={i}>
        {console.log('event: ', event)}
        <Event key={i} {...event} />
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
