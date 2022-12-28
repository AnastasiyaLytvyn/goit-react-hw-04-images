import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Container } from './App.styled';

export class App extends Component {
  state = { search: '' };

  handleSubmit = value => {
    this.setState({ search: value.search });
    console.log(value.search);
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        <Modal/>
      </Container>
    );
  }
}
