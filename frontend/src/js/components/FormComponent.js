import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createEvent } from '../actions';
import { Checkbox, ListGroupItem } from 'react-bootstrap';
import Autocomplete from 'react-google-autocomplete';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class FormComponent extends Component {

  state = {
    eventName: '',
    time: '',
    location: '',
    description: '',
    invited: [],
    isPrivate: false
  }

  _createEvent = async (e) => {
    this.props.createEvent(this.props.user.user._id, this.state);
    this.setState({
      eventName: '',
      time: '',
      location: '',
      description: '',
      invited: [],
      isPrivate: false
    });
}

  _eventName = (e) => this.setState({ eventName: e.target.value });

  _updateLocationText = (e) => {
    console.log(e.target.value);
    this.setState({ location: e.target.value })
  }

  _location = (place) => this.setState({ location: place });

  _time = (date) => {
    this.setState({ time: date });
  }

  _description = (e) => this.setState({ description: e.target.value });

  _invited = (e) => { this.setState({ invited: e.target.value.split(', ') }) };

  _isPublic = (e) => { this.setState({ isPrivate: !this.state.isPrivate }) };

render() {
return (
  <div className="text-left">
    <div className="row">
      <div className="col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-4 col-lg-4">
        <div className="card">
          <div className="card-block">
            <ListGroupItem>
              <h3 className="card-title text-center">Create a new Event</h3>
            </ListGroupItem>

            <form style={{marginBottom: '40px'}}>
            <ListGroupItem bsStyle="info">
              <div className="form-group row">
                <label htmlFor="text-input" className="col-2 col-form-label">Event Name: </label>
                <div className="col-4">
                  <input style={{width: '80%', margin:'0 auto'}} onChange={ this._eventName } className="form-control" type="text" placeholder="ex. Graduation Party" id="text-input" required="true"></input>
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem bsStyle="info">
              <div className="form-group row text-center">
                <SingleDatePicker
                  date={this.state.date} // momentPropTypes.momentObj or null
                  onDateChange={date => {
                    this.setState({ date })
                    this._time(date._d);
                  }
                } // PropTypes.func.isRequired
                  focused={this.state.focused} // PropTypes.bool
                  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                />
              </div>
            </ListGroupItem>

            <ListGroupItem bsStyle="info">
              <div className="form-group row">
                <label htmlFor="messag-text" className="control-label">Location:</label>
                <div className="col-4">
                <Autocomplete
                className="form-control"
                  style={{width: '80%', margin:'0 auto'}}
                  onChange={ (e) => this._updateLocationText(e) }
                  onPlaceSelected={(place) => {
                    this._location(place.formatted_address || event.target.value)
                  }}
                  types={['address']}
                 />
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem bsStyle="info">
              <div className="form-group row">
                <label htmlFor="messag-text" className="control-label">Description:</label>
                <div className="col-4">
                  <textarea style={{width: '80%', margin:'0 auto'}} onChange={ this._description } className="form-control" id="message-text" placeholder="Lets get together for..." required="true"></textarea>
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem bsStyle="info">
              <div className="form-group row">
                <label htmlFor="email-input" className="col-2 col-form-label">Invites: </label>
                <div className="col-4">
                  <input style={{width: '80%', margin:'0 auto'}} onChange={ this._invited } className="form-control" type="email" required="true" placeholder="friend@email.com, friend2@email.com" id="email-input"></input>
                </div>
                  <Checkbox onClick={this._isPublic}>
                  Make Private
                  </Checkbox>
              </div>
            <button id="buttonSubmit" type="button" className="btn btn-primary center-block" onClick={this._createEvent}>Create</button>
            </ListGroupItem>
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


