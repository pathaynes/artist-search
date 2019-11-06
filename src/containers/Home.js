import React, { Component } from 'react';
import ArtistDeck from './Artist-Deck';
import Search from '../components/Search';
import getArtists from '../services/artist-api';
import styles from './Home.css';

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
    getArtists(this.state.searchTerm, newPage)
      .then(({ artists }) => {
        this.setState({ artists });
      });
    this.setState({ page: newPage });
  }

  handleNext = () => {
    getArtists(this.state.searchTerm, this.state.page + 1)
      .then(({ artists }) => {
        this.setState({ artists });
      });
    this.setState({ page: this.state.page + 1 });
  }

  render() {
    return (
      <div className={styles.Home}>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} />
        <ArtistDeck
          artists={this.state.artists}
          handleBack={this.handleBack}
          handleNext={this.handleNext} />
      </div>
    );
  }
}
