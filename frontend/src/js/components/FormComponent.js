import React, { Component } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import { createEvent } from '../actions';
import { Checkbox } from 'react-bootstrap';
// import Moment from 'moment';

// console.log(Moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'))

class FormComponent extends Component {

  state = {
    eventName: '',
    time: '',
    description: '',
    invited: [],
  }

  _createEvent = async (e) => {
    this.props.createEvent(this.props.user.user._id, this.state);
    this.setState({
      eventName: '',
      time: '',
      description: '',
      invited: []
    });
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
  <div className="text-center">
    <div className="row">
      <div className="col-xs-6 col-xs-offset-4 col-md-4 col-md-offset-4">
        <div className="card">
          <div className="card-block">
            <h3 className="card-title">Create a new Event</h3>
            <form >
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
                <Checkbox defaultChecked readOnly>
                Make Public
                </Checkbox>
              </div>
              <button type="button" className="btn btn-primary" onClick={this._createEvent}>Create</button>
          </form>

          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, { createEvent })(FormComponent);


