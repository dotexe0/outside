import React, { Component } from 'react';
import moment from 'moment';
import { Button } from 'react-bootstrap';

export default class Event extends Component {

  _deleteEvent = () => {
    this.props.deleteEvent(this.props._id);
  }
  render() {
    const {description, eventName, invited, time} = this.props;

    return (
      <div className="Event">
        <strong>{eventName}</strong><br />
        <h5>{moment(time).format('MMMM Do YYYY, h:mm:ss a')}</h5>
        <h5>{description}</h5>
        <h5>{invited}</h5>
        <Button bsStyle="danger" onClick={this._deleteEvent}>X</Button>
      </div>
    );
  }
}

