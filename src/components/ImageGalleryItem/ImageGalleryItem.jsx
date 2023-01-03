import React, { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = { showModal: false };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    const { showModal } = this.state;
    return (
      <GalleryItem id={id}>
        <GalleryItemImage
          src={webformatURL}
          onClick={this.openModal}
          loading="lazy"
        />
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} width="600px" alt=""></img>
          </Modal>
        )}
      </GalleryItem>
    );
  }
}
