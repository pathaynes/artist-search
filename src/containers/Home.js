import React, { Component } from 'react';
import ArtistDeck from './Artist-Deck';
import Search from '../components/Search';

export default class Home extends Component {
  state = {
    artists: [],
    searchTerm: '',
    page: 1
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.searchTerm);
  }

  handleChange = ({ target }) => {
    this.setState({ searchTerm: target.value });
  }

  render() {
    return (
      <>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} />
        <ArtistDeck artists={this.state.artists} />
      </>
    );
  }
}
