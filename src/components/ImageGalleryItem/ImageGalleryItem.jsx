import { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <GalleryItem id={id}>
      <GalleryItemImage src={webformatURL} onClick={openModal} loading="lazy" />
      {showModal && (
        <Modal onClose={closeModal}>
          <img src={largeImageURL} width="600px" alt=""></img>
        </Modal>
      )}
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
// export class ImageGalleryItem1 extends Component {
//   state = { showModal: false };

//   openModal = () => {
//     this.setState({ showModal: true });
//   };

//   closeModal = () => {
//     this.setState({
//       showModal: false,
//     });
//   };

//   render() {
//     const { id, webformatURL, largeImageURL } = this.props;
//     const { showModal } = this.state;
//     return (
//       <GalleryItem id={id}>
//         <GalleryItemImage
//           src={webformatURL}
//           onClick={this.openModal}
//           loading="lazy"
//         />
//         {showModal && (
//           <Modal1 onClose={this.closeModal}>
//             <img src={largeImageURL} width="600px" alt=""></img>
//           </Modal1>
//         )}
//       </GalleryItem>
//     );
//   }
// }
