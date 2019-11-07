import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getLyrics from '../services/lyrics-api';

export default function Lyrics({ match }) {

  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    getLyrics(match.params.artist, match.params.track)
      .then(({ lyrics }) => {
        setLyrics(lyrics);
      });
  }, [match.params.artist, match.params.track]);


  return (
    <>
      <h1>Lyrics for {match.params.track}</h1>
      <h2>by {match.params.artist} on the album {match.params.album}</h2>
      <pre>{lyrics}</pre>
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
