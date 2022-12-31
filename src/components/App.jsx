import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Container } from './App.styled';

// import { fetchImages } from 'services/api';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    modalImg: '',
    showModal: false,
    status: 'idle',
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const { search, page } = this.state;
  // }

  handleSubmit = value => {
    this.setState({ search: value.search, images: [], page: 1 });
    console.log(value.search);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  openModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { images, showModal } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <ImageGallery
            images={images}
            onImageClick={this.openModal}
          ></ImageGallery>
        )}
        {showModal && <Modal onClose={this.toggleModal} />}
      </Container>
    );
  }
}
