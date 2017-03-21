import React from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
// import { searchGame } from '../actions';
import { browserHistory } from 'react-router';

class SearchBar extends React.Component {

  state = {
    query: '',
    loading: false
  }

   onSearchAPI = async (event) => {
    event.preventDefault();

    // this.props.searchGame(this.state.query)
    browserHistory.push('/')
    console.log("Working...")
    this.setState({ query: ''});
  }

  _onChangeTerm = e => this.setState({ query: e.target.value });

  render() {
      return (
        <nav className="navbar navbar-light bg-faded">
          <form className="form-inline" onSubmit={this.onSearchAPI}>
            <input className="form-control mr-sm-2" type="text" placeholder="Search for Event" value={this.state.query} onChange={this._onChangeTerm} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.onSearchAPI}>Search</button>
          </form>
      </nav>
      )
  }
}
// <nav class="navbar navbar-light bg-faded">
//   <form class="form-inline">
//     <input class="form-control mr-sm-2" type="text" placeholder="Search">
//     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//   </form>
// </nav>

const mapStateToProps = state => ({
  loading: state.loading
});

// export default connect(mapStateToProps, { searchGame })(SearchBar);
export default connect(mapStateToProps)(SearchBar);
