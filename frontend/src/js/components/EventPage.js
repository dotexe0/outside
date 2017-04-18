import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPublicEvents } from '../actions';
import Event from './Event';
import { ProgressBar, ListGroupItem } from 'react-bootstrap';

class EventPage extends Component {
  state = { loading: false }

  async componentDidMount() {
    this.setState({ loading: true })
    await this.props.getAllPublicEvents();
    this.setState({ loading: false })
  }

  render() {
    console.log(this.props);
    if (this.state.loading) {
      return (
        <div className="col-xs-6 col-xs-offset-4 col-md-4 col-md-offset-4">
        <h1>Loading ... </h1>
          <ProgressBar active now={45} />
        </div>
      );
    }
    if (this.props.user.publicEvents.length === 0) {
      return (
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
            <ListGroupItem header="No events created yet.">
            </ListGroupItem>
          </div>
      );
    }
    return (
      <div >
        {this.props.user.publicEvents.map((event, i) => (
          <div key={i} className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
          <Event key={i} {...event} routeLocation={this.props.location.pathname}/>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state
   }),
  {getAllPublicEvents}
)(EventPage);
