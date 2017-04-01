import React, { Component } from 'react';
import moment from 'moment';
import { Panel, Well } from 'react-bootstrap';

export default class Event extends Component {
  render() {
    const {description, eventName, invited, time, location } = this.props;
    console.log('Event Comp Props: ', this.props);
    return (
      <Well className="Event">
        <Panel bsSize="large" className="col-xs-8 col-xs-offset-1 col-md-4 col-md-offset-1" header={`Event: ${eventName}`} bsStyle="info">
          <h5>Date: {moment(time).format('MMMM Do YYYY')}</h5>
          <h5>Location: {location}</h5>
          <h5>Description: {description}</h5>
          <h5>Invited: {invited.join(", ")}</h5>
          { this.props.children }
        </Panel>
      </Well>
    );
  }
}

