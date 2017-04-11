import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getAllUserEvents, deleteEvent } from '../actions';
import Event from './Event';
import { Button, Panel, ListGroupItem, ProgressBar } from 'react-bootstrap';

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
      return (
        <div className="col-xs-6 col-xs-offset-4 col-md-4 col-md-offset-4">
          <h1>Loading ... </h1>
          <ProgressBar active now={65} />
        </div>
      );
    }
    if (!this.props.user.user.events || this.props.user.user.events.length === 0) {
      return (
        <div className="col-xs-6 col-xs-offset-2 col-md-4 col-md-offset-4">
          <ListGroupItem header="No events created yet.">
          </ListGroupItem>

          {this.props.user.user.isAuthenticated ? (
          <Panel header="No events created yet." bsStyle="primary">
            <Link to='/createEvent'><Button bsStyle="primary">Create Event</Button></Link>
          </Panel>
          ) : (
          <span>
            <Panel header={notLoggedIn} bsStyle="primary">
              <Link to='/login'><Button bsStyle="primary">Login</Button></Link>
            </Panel>
            <Panel header={noAccount} bsStyle="primary">
              <Link to='/signup'><Button bsStyle="primary">Signup</Button></Link>
            </Panel>
          </span>
          )}
        </div>
      )
    }

    return (
      <div>
        {this.props.user.user.events.map((event, i) => (
        <div key={i} className="col-xs-12 col-xs-offset-1 col-md-12 col-md-offset-3">
        <Event key={i} {...event} />
        <Button bsStyle="danger" onClick={() => this._deleteEvent(event._id)}>Delete</Button>
          &nbsp;
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
