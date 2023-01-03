import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Container } from './App.styled';
import { fetchImages } from 'services/api';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ status: 'pending' });

      try {
        const res = await fetchImages(search, page);
        if (res.data.total === 0) {
          throw new Error('Images not found');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...this.galleryItems(res.data.hits)],
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ status: 'resolved' });
      }
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
    this.setState({
      search: value.search,
      images: [],
      page: 1,
      status: 'idle',
    });
    console.log(value.search);
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, status } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && <ImageGallery images={images}></ImageGallery>}
        {status === 'pending' && <Loader />}
        {images.length % 12 === 0 && images.length !== 0 && (
          <Button onClick={this.loadMore} />
        )}
      </Container>
    );
  }
}
