import React, { Component } from 'react';
import styled from 'styled-components';

// import '../../css/Home.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
// import { Button } from 'react-boostrap';

  const HomeWrapper = styled.div`

  `;

class Home extends Component {

  state = {
    eventName: '',
    time: '',
    description: '',
    invited: []
  }

  _createEvent = async (event) => {
    console.log("event clicked")
}

  _findEvent = async (query) => {
    console.log("search clicked");
  }

  render() {
    return (
      <HomeWrapper>
        <NavBar />

        <div className="Home-header">
          <h2 className="text-center">Outside</h2>
        </div>

        <p className="text-center">
          <code>Book your next event with Outside</code>
        </p>

        <div className="text-center">
          <ul className="list-unstyled">
            <li className="card">Create a new Event</li>
            <li>Review an existing event</li>
            <li>Have an event ID?</li>
          </ul>
        </div>

      <div className="text-center">
        <div className="row">

          <div className="col-sm-4">
            <div className="card">
              <div className="card-block">
                <h3 className="card-title">Create a new Event</h3>
                <p className="card-text">...</p>

              <form>
                <div className="form-group row">
                  <label htmlFor="text-input" className="col-2 col-form-label">Event Name: </label>
                  <div className="col-4">
                    <input className="form-control" type="text" placeholder="Graduation Party" id="text-input" required="true"></input>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="datetime-local-input" className="col-2 col-form-label">Date and time: </label>
                  <div className="col-4">
                    <input className="form-control" type="datetime-local" placeholder="2011-08-19T13:45:00" id="datetime-local-input" required="true"></input>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="messag-text" className="control-label">Description:</label>
                  <div className="col-4">
                    <textarea className="form-control" id="message-text" placeholder="Lets get together for..." required="true"></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="email-input" className="col-2 col-form-label">Invites: </label>
                  <div className="col-4">
                    <input className="form-control" type="email" required="true" placeholder="friend@email.com, friend2@email.com" id="email-input"></input>
                  </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={this._createEvent}>Create</button>
              </form>

              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-block">
                <h3 className="card-title">Find an existing Event</h3>
                <p className="card-text">...</p>

                <form>
                  <div className="form-group row">
                    <label htmlFor="search-input" className="col-2 col-form-label">Search</label>
                    <div className="col-10">
                      <SearchBar />
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
        {this.props.children}
      </HomeWrapper>
    );
  }
}

export default Home;


//Client Token: gAAAAABYyC1JvlxSq5rooQLqAkakeBpJnZHDLX7y-YujFfJPoLXtJ3KF3X1uW9fbIxhT73cxBn8P_T4QqwvPVnLSUhZgF_YjhA_iWtM3ca9yrEILuDefIFU4OigFSR52FVhjfG8nZSSHGWIdIneDCDftwxeu-G35NokGKyWB1bvr3ciAFx3eVso=
//Client Secret: GRETvJSoiwGSDZBOuIQL_Rc7pbSNzgR3
