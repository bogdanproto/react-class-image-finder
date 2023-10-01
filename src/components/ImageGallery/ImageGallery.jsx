import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { LoaderStyled } from 'components/Loader/Loader.styled';
import { fetchData } from 'API/api';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    data: {
      hits: [],
      page: 1,
      total: null,
    },

    isError: false,
    loading: false,
  };

  async componentDidUpdate(prevProps) {
    const prevQuery = prevProps.query.toLowerCase();
    const currentQuery = this.props.query.toLowerCase();

    if (prevQuery === currentQuery) {
      return;
    }

    await this.setState({
      data: {
        hits: [],
        page: 1,
        total: null,
      },
    });

    this.loadData(currentQuery);
  }

  loadData = async () => {
    const currentQuery = this.props.query.toLowerCase();
    const {
      data: { page },
    } = this.state;

    try {
      this.setState({ loading: true });

      const response = await fetchData(currentQuery, page);
      const { hits, totalHits } = response;

      this.setState(prevState => {
        return {
          data: {
            hits: [...prevState.data.hits, ...hits],
            total: totalHits,
            page: page + 1,
          },
          loading: false,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      data: { hits, total },
      loading,
    } = this.state;

    console.log(this.state.data);

    return (
      <>
        {hits.length > 0 && (
          <ImageGalleryStyled>
            {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            ))}
          </ImageGalleryStyled>
        )}
        {loading && <LoaderStyled />}
        {hits.length > 0 && hits.length < total && (
          <Button click={this.loadData} />
        )}
      </>
    );
  }
}
