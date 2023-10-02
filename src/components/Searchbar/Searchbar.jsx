import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Header } from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';

export class Searchbar extends Component {
  state = {
    query: '',
    prevQuery: '',
  };

  handleInput = evt => {
    const { value } = evt.currentTarget;
    this.setState({ query: value, isSend: false });
  };

  submitForm = evt => {
    evt.preventDefault();
    const { submitQuery } = this.props;
    const { query, prevQuery } = this.state;

    if (!query) {
      toast.info('Please text your query');
      return;
    }

    if (prevQuery === query) {
      toast.info('This query already has sent');
      return;
    }
    submitQuery(query);
    this.setState({ prevQuery: query });
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
