import React, { Component } from 'react';
import ArtistDeck from './Artist-Deck';
import Search from '../components/Search';
import getArtists from '../services/artist-api';

export default class Home extends Component {
  state = {
    artists: [],
    searchTerm: '',
    page: 1
  };

  handleSubmit = event => {
    event.preventDefault();
    getArtists(this.state.searchTerm, this.state.page)
      .then(({ artists }) => {
        this.setState({ artists });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ searchTerm: target.value });
  }

  handleBack = () => {
    const newPage = Math.max(1, this.state.page - 1);
    this.setState({ page: newPage });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
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
