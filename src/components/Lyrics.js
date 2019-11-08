import React from 'react';
import PropTypes from 'prop-types';
import { useLyrics } from '../hooks/Lyrics';
import styles from './Lyrics.css';

export default function Lyrics({ match }) {
  const lyrics = useLyrics();

  return (
    <>
      <div className={styles.Lyrics}>
        <h1>&quot;{match.params.track}&quot;</h1>
        <h2>Album: {match.params.album}</h2>
        <h2>by {match.params.artist}</h2>
        <pre>{lyrics}</pre>
        {!lyrics &&
          <>
            <p>Sorry, no lyrics found!</p>
            <img src="/src/assets/giphy.gif" />
          </>}
      </div>
    </>
  );
}

Lyrics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      album: PropTypes.string.isRequired,
      track: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
