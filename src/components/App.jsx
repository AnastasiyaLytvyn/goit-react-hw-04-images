import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = { search: '' };

  handleSubmit = value => {
    this.setState({ search: value.search });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
