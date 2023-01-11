import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Container } from './App.styled';
import { fetchImages } from 'services/api';

export function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!search) {
      console.log('First render');
      return;
    }

    async function getData() {
      setStatus('pending');
      try {
        const res = await fetchImages(search, page);

        if (res.data.total === 0) {
          throw new Error('Images not found');
        }
        if (page === 1) {
          toast.success(`Hooray! We found ${res.data.totalHits} images.`);
        }
        setImages(prevState => [...prevState, ...galleryItems(res.data.hits)]);
      } catch (error) {
        console.log(error);
      } finally {
        setStatus('resolved');
      }
    }
    getData();
  }, [search, page]);

  const galleryItems = data => {
    return data.map(element => ({
      id: element.id,
      webformatURL: element.webformatURL,
      largeImageURL: element.largeImageURL,
    }));
  };

  const handleSubmit = value => {
    setSearch(value.search);
    setImages([]);
    setPage(1);
    setStatus('idle');
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit}></Searchbar>
      {images.length > 0 && <ImageGallery images={images}></ImageGallery>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' &&
        images.length !== 0 &&
        images.length % 12 === 0 && <Button onClick={loadMore} />}
      <ToastContainer theme="colored" autoClose={2000} />
    </Container>
  );
}
