import { ImageItem } from './ImageGalleryItem.styled';
import { Loader } from 'components/Loader/Loader';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <ImageItem>
      <img src={webformatURL} alt="tags" />
    </ImageItem>
  );
};
