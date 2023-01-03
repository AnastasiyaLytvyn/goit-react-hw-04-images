import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Container } from './App.styled';
import { fetchImages } from 'services/api';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    status: 'start',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    try {
      if (prevState.search !== search || prevState.page !== page) {
        this.setState({ status: 'loading' });
        const res = await fetchImages(search, page);
        if (res.data.total === 0) {
          throw new Error('Images not found');
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...this.galleryItems(res.data.hits)],
          status: 'loaded',
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ status: 'start' });
    }
  }

  galleryItems = data => {
    return data.map(element => ({
      id: element.id,
      webformatURL: element.webformatURL,
      largeImageURL: element.largeImageURL,
    }));
  };

  handleSubmit = value => {
    this.setState({ search: value.search, images: [], page: 1 });
    console.log(value.search);
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <ImageGallery
            images={images}
            onImageClick={this.handleModal}
          ></ImageGallery>
        )}
        {images.length > 0 && <Button onClick={this.loadMore} />}
      </Container>
    );
  }
}
