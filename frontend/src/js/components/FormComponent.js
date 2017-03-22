
import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import { createEvent } from '../actions';
// import Moment from 'moment';

// console.log(Moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'))

class FormComponent extends Component {

  state = {
    eventName: '',
    time: '',
    description: '',
    invited: []
  }

  _createEvent = async (e) => {
    this.props.createEvent(this.state);
}

  _eventName = (e) => this.setState({ eventName: e.target.value })

  _time = (e) => this.setState({ time: e.target.value })

  _description = (e) => this.setState({ description: e.target.value })

  _invited = (e) => {
    // console.log(e.target.value.split(', '));
    this.setState({ invited: e.target.value.split(', ') });
  }



  render() {
    return (
      <form>
        <div className="form-group row">
          <label htmlFor="text-input" className="col-2 col-form-label">Event Name: </label>
          <div className="col-4">
            <input onChange={ this._eventName } className="form-control" type="text" placeholder="Graduation Party" id="text-input" required="true"></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="datetime-local-input" className="col-2 col-form-label">Date and time: </label>
          <div className="col-4">
            <input onChange={ this._time } className="form-control" type="datetime-local" placeholder="2011-08-19T13:45:00" id="datetime-local-input" required="true"></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="messag-text" className="control-label">Description:</label>
          <div className="col-4">
            <textarea onChange={ this._description }className="form-control" id="message-text" placeholder="Lets get together for..." required="true"></textarea>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email-input" className="col-2 col-form-label">Invites: </label>
          <div className="col-4">
            <input onChange={ this._invited } className="form-control" type="email" required="true" placeholder="friend@email.com, friend2@email.com" id="email-input"></input>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={this._createEvent}>Create</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, { createEvent })(FormComponent);

