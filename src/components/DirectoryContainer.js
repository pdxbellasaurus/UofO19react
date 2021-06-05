import React, { Component } from 'react';
// import React, { useState } from "react";
import SearchField from './SearchField';
import Header from './Header';
import TableContainer from './Table';
import API from '../utils/API';
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
    console.log(this.state.search);
    console.log(this.state.results);
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
    const filtered = this.state.results.filter((data) =>
      data.name.first.toLowerCase().includes(this.state.search.toLowerCase())
    );
    console.log(filtered);
    this.setState({ result: filtered });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getEmployees(this.state.search);
  };

  render() {
    return (
      <div>
        <Header />
        <SearchField
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <TableContainer 
        results={this.state.results} 
        />
      </div>
    );
  }
}

export default DirectoryContainer;
