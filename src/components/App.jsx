import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Container } from './App.styled';

export class App extends Component {
  state = { search: '', showModal: false };

  handleSubmit = value => {
    this.setState({ search: value.search });
    console.log(value.search);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {showModal && <Modal onClose={this.toggleModal} />}
      </Container>
    );
  }
}
