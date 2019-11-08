import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlbumCard from '../components/Album-Card';
import { useAlbums } from '../hooks/Albums';
import styles from './Album-Deck.css';

export default function AlbumDeck() {
  const [name] = useState('');
  const [page, setPage] = useState(1);
  let { artist } = useParams();

  const albums = useAlbums();

  const handleBack = () => {
    const newPage = Math.max(1, page - 1);
    setPage(newPage);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const albumCovers = albums[0].map(album => {
    return (
      <li key={album.id}>
        <AlbumCard artist={artist} title={album.title} release_id={album.id} />
      </li>
    );
  });

  return (
    <section className={styles.AlbumDeck}>
      <button onClick={handleBack}>Back</button>
      <ul>
        <h1>{name}</h1>
        {albumCovers}
      </ul>
      <button onClick={handleNext}>Next</button>
    </section>
  );
}

AlbumDeck.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
