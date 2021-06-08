import React, { Component, useState } from 'react';
import SearchField from './SearchField';
import Header from './Header';
import TableContainer from './Table';
import API from '../utils/API';
import _ from 'lodash';
class DirectoryContainer extends Component {
  state = {
    results: [],
    search: '',
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) =>
        this.setState({
          results: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    console.log('===============results')
    console.log(this.state.results);
    console.log('===============data')
    console.log(this.state.data);
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
    const filtered = this.state.results
    .filter((data) =>
    data.name.first.toLowerCase()
    .includes(this.state.search.toLowerCase())
    );
    this.setState({ results: filtered });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchField
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <TableContainer 
        results={this.state.results}
        />
      </div>
    );
  }
}

export default DirectoryContainer;
