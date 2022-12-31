import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImg, largeImg, onClick }) => {
  return (
    <GalleryItem>
      <GalleryItemImage
        src={smallImg}
        onClick={() => onClick(largeImg)}
        alt=""
      />
    </GalleryItem>
  );
};
