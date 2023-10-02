import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { smoothScrool } from 'utils/smoothScroll';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { LoaderStyled } from 'components/Loader/Loader.styled';
import { fetchData } from 'API/api';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    data: {
      hits: [],
      page: 1,
      total: null,
    },
    modal: {
      isShowModal: false,
      dataModal: null,
    },

    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query.toLowerCase();
    const currentQuery = this.props.query.toLowerCase();

    if (prevQuery !== currentQuery) {
      await this.setState({
        data: {
          hits: [],
          page: 1,
          total: null,
        },
      });

      this.loadData();
    }

    if (
      this.state.data.page !== prevState.data.page &&
      this.state.data.page > 2
    ) {
      smoothScrool();
    }
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

      if (!totalHits) {
        this.setState({ loading: false });
        toast.info('No results found');
        return;
      }

      await this.setState(prevState => {
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
      this.setState({ loading: false });
      toast.error('Error downloads');
    }
  };

  openModal = evt => {
    const { img } = evt.currentTarget.dataset;
    this.setState({ modal: { dataModal: img, isShowModal: true } });
  };

  closeModal = () => {
    this.setState({ modal: { isShowModal: false } });
  };

  render() {
    const {
      data: { hits, total },
      modal: { dataModal, isShowModal },
      loading,
    } = this.state;

    return (
      <>
        {hits.length > 0 && (
          <ImageGalleryStyled>
            {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                showImg={this.openModal}
              />
            ))}
          </ImageGalleryStyled>
        )}
        {loading && <LoaderStyled />}
        {hits.length > 0 && hits.length < total && (
          <Button click={this.loadData} />
        )}

        {isShowModal && <Modal data={dataModal} closeModal={this.closeModal} />}
      </>
    );
  }
}
