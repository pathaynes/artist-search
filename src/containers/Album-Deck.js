import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AlbumCard from '../components/Album-Card';
import { getAlbums } from '../services/artist-api';
import styles from './Album-Deck.css';

const AlbumDeck = ({ match }) => {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAlbums(match.params.id, page)
      .then(({ releases }) => {
        setAlbums(releases);
      });
  }, [page]);

  const handleBack = () => {
    const newPage = Math.max(1, page - 1);
    setPage(newPage);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const albumCovers = albums.map(album => {
    return (
      <li key={album.id}>
        <AlbumCard artist={match.params.artist} title={album.title} release_id={album.id} />
      </li>
    );
  });

  return (
    <section className={styles.AlbumDeck}>
      <button onClick={handleBack}>Back</button>
      <ul>
        <h1>{match.params.artist}</h1>
        {albumCovers}
      </ul>
      <button onClick={handleNext}>Next</button>
    </section>
  );
};

AlbumDeck.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default AlbumDeck;
