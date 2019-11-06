import React, { Component } from 'react';
import ArtistDeck from './Artist-Deck';
import Search from '../components/Search';
import { getArtists } from '../services/artist-api';
import styles from './Home.css';

export default class Home extends Component {
  state = {
    artists: [],
    searchTerm: '',
    page: 1
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getArtistsByPage(this.state.page);
  }

  handleChange = ({ target }) => {
    this.setState({ searchTerm: target.value });
  }

  handleBack = () => {
    const newPage = Math.max(1, this.state.page - 1);
    this.getArtistsByPage(newPage);
    this.setState({ page: newPage });
  }

  handleNext = () => {
    this.getArtistsByPage(this.state.page + 1);
    this.setState({ page: this.state.page + 1 });
  }

  getArtistsByPage = page => {
    getArtists(this.state.searchTerm, page)
      .then(({ artists }) => {
        this.setState({ artists });
      });
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
