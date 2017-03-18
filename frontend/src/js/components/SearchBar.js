import React from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
// import { searchGame } from '../actions';
import { hashHistory } from 'react-router';

class SearchBar extends React.Component {
  
  state = {
    query: '',
    loading: false
  }

  // not working right now  
  // const isLoading = () => {
  //   const loading = this.state.loading;
  //   if (loading) {
  //     return <h1> Loading... </h1>
  // };

  onSearchAPI = async (event) => {
    event.preventDefault();
    // this.props.searchGame(this.state.query)
    hashHistory.push('/')
  }

  _onChangeTerm = e => this.setState({ query: e.target.value });

  render() {
      return (
          <div className="formDiv">
            <form className="form" onSubmit={this.onSearchAPI}>
              <input className="inputBox" type="text" placeholder="Enter game title" value={this.state.query} onChange={this._onChangeTerm} />
              <button className="button" type="button" onClick={this.onSearchAPI}>
                  Search
              </button>
            </form>
            <isLoading />
          </div>
      )
  }
}

const mapStateToProps = state => ({
  loading: state.loading
});

// export default connect(mapStateToProps, { searchGame })(SearchBar);
export default connect(mapStateToProps)(SearchBar);
