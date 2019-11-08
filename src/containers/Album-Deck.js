import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlbumCard from '../components/Album-Card';
import { getAlbums } from '../services/artist-api';
import styles from './Album-Deck.css';
import { usePaging } from './Paging';

export default function AlbumDeck() {

  const [albums, setAlbums] = useState([]);
  const [name] = useState('');
  const { artist, id } = useParams();
  const { page, handleNext, handleBack } = usePaging();

  useEffect(() => {
    getReleases(page);
  }, [page]);

  const getReleases = page => {
    getAlbums(id, page)
      .then(({ releases }) => {
        setAlbums(releases);
      });
  };

  const albumCovers = albums.map(album => {
    return (
      <li key={album.id}>
        <AlbumCard artist={artist} title={album.title} release_id={album.id} />
      </li>
    );
  });

  return (
    <section className={styles.AlbumDeck}>
      <button onClick={handleBack}>Back</button>
      <h2>{name}</h2>
      <ul>
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
