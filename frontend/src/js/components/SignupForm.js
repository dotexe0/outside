import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SignupForm extends Component {
  state = {}

  render() {
    return (
      <div>
        <form className="signup-form" action="/api/signup" method="post">
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name="email" id="email"></input>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" id="password"></input>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
        </form>
      </div>
    )
  }
}
