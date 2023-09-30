import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
  };

  submitQuery = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar submitQuery={this.submitQuery} />{' '}
        <ImageGallery query={this.state.query} />
      </>
    );
  }
}
