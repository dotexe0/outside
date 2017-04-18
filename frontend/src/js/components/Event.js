import React, { Component } from 'react';
import moment from 'moment';
import { Panel, Button } from 'react-bootstrap';

export default class Event extends Component {

   _deleteEvent = (id) => {
     console.log('delete ID: ', id);
    this.props.deleteEvent(id);
  }

  render() {
    const {description, eventName, invited, time, location, routeLocation, _id } = this.props;

    return (
      <div className={routeLocation === '/events' ?
           'col-xs-10 col-xs-offset-1 col-md-5 col-md-offset-1 col-lg-4' :
           'col-xs-12 col-md-12 col-lg-12'}>
        <Panel bsSize="large" header={`Event: ${eventName}`} bsStyle="info">
          <h5>Date: {moment(time).format('MMMM Do YYYY')}</h5>
          <h5>Location: {location}</h5>
          <h5>Invited: {invited.join(", ")}</h5>
          <h5>Description: {description}</h5>
          {routeLocation === '/myEvents' &&
            <Button bsStyle="danger" onClick={() => this._deleteEvent(_id)}>Delete</Button>
          }
          &nbsp;
        </Panel>
      </div>
    );
  }
}

