import React, { Component } from 'react';
import { Header } from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInput = evt => {
    const { value } = evt.currentTarget;
    this.setState({ query: value });
  };

  submitForm = evt => {
    evt.preventDefault();
    const { submitQuery } = this.props;
    const { query } = this.state;

    submitQuery(query);
  };

  resetForm = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.submitForm}>
          <button type="submit">
            <FaSearch />
          </button>

          <input
            type="text"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInput}
          />
        </form>
      </Header>
    );
  }
}
