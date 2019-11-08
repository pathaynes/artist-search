import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlbumCard from '../components/Album-Card';
import { useAlbums } from '../hooks/Albums';
import { usePaging } from '../hooks/Paging';
import styles from './Album-Deck.css';

export default function AlbumDeck() {
  const [name] = useState('');
  const { page, increment, decrement } = usePaging();
  let { artist } = useParams();

  const albums = useAlbums(page);

  const albumCovers = albums[0].map(album => {
    return (
      <li key={album.id}>
        <AlbumCard artist={artist} title={album.title} release_id={album.id} />
      </li>
    );
  });

  return (
    <section className={styles.AlbumDeck}>
      <button onClick={decrement}>Back</button>
      <ul>
        <h1>{name}</h1>
        {albumCovers}
      </ul>
      <button onClick={increment}>Next</button>
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
