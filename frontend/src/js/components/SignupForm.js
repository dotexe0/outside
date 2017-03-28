import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions';

 class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    user: {
      events: []
    }
  }

  _handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
    // console.log(e.target.id);
  }

  _signupUser = (e) => {
    e.preventDefault();
    this.props.signup(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="col-xs-12 col-md-4 col-md-offset-4">
        <form className="signup-form" onSubmit={this._signupUser}>
          <div className="form-group">
            <label>Username</label>
            <input onChange={this._handleChange} type="text" className="form-control" name="email" id="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input onChange={this._handleChange} type="password" className="form-control" name="password" id="password" />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.user
   }),
  { signup }
)(SignupForm);
