import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { fetchData } from 'API/api';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVE: 'resolve',
  REJECT: 'reject',
};

export class ImageGallery extends Component {
  state = {
    data: [],
    status: STATUS.IDLE,
  };

  async componentDidUpdate(prevProps) {
    const prevQuery = prevProps.query.toLowerCase();
    const currentQuery = this.props.query.toLowerCase();

    if (prevQuery === currentQuery) {
      return;
    }

    try {
      this.setState({ status: STATUS.PENDING });
      const response = await fetchData(currentQuery);
      this.setState({ data: response, status: STATUS.RESOLVE });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { data, status } = this.state;
    console.log(data);

    if (status === STATUS.PENDING) {
      return <p>loading</p>;
    }

    if (status === STATUS.RESOLVE) {
      return (
        <ImageGalleryStyled>
          {data.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
        </ImageGalleryStyled>
      );
    }
  }
}
