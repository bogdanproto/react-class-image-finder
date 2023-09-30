import { ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <ImageItem>
      <img src={webformatURL} alt="tags" />
    </ImageItem>
  );
};
