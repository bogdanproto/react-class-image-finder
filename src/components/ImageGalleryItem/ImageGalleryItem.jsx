import { ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  showImg,
  webformatURL,
  largeImageURL,
  tags,
}) => {
  return (
    <ImageItem data-img={largeImageURL} onClick={showImg}>
      <img src={webformatURL} alt={tags} />
    </ImageItem>
  );
};
