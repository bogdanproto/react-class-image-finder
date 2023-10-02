import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { AppStyled } from './App.styled';
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    query: '',
  };

  submitQuery = query => {
    this.setState({ query });
  };

  render() {
    return (
      <AppStyled>
        <Searchbar submitQuery={this.submitQuery} />
        <ImageGallery query={this.state.query} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AppStyled>
    );
  }
}
