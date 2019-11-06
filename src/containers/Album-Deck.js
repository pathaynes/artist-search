import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumCard from '../components/Album-Card';
import { getAlbums } from '../services/artist-api';

export default class AlbumDeck extends Component {
  state = {
    albums: [],
    name: '',
    page: 1
  }

  componentDidMount() {
    getAlbums(this.props.match.params.id, this.state.page)
      .then(({ releases }) => {
        this.setState({ albums: releases });
      });
  }

  render() {

    const albumCovers = this.state.albums.map(album => {
      return (
        <li key={album.id}>
          <AlbumCard title={album.title} release_id={album.id} />
        </li>
      );
    });


    return (
      <section>
        <button onClick={this.handleBack}>Back</button>
        <h2>{this.state.name}</h2>
        <ul>
          {albumCovers}
        </ul>
        <button onClick={this.handleNext}>Next</button>
      </section>
    );
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

}
