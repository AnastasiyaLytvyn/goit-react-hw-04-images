import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            onImageClick={onImageClick}
          ></ImageGalleryItem>
        );
      })}
    </ImageGalleryList>
  );
};
