import React, { Component } from 'react';
import moment from 'moment';

export default class Event extends Component {
  render() {
    const {description, eventName, invited, time } = this.props;
    return (
      <div className="Event">
        <strong>Event: {eventName}</strong><br />
        <h5>Time: {moment(time).format('MMMM Do YYYY, h:mm:ss a')}</h5>
        <h5>Description: {description}</h5>
        <h5>Invited: {invited.join(", ")}</h5>
      </div>
    );
  }
}

        // <span><h5>{ _id }</h5></span>
