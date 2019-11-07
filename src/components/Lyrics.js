import React from 'react';
import PropTypes from 'prop-types';

export default function Lyrics({ match }) {
  return (
    <>
      <h1>Lyrics for {match.params.track}</h1>
      <h2>by {match.params.artist} on the album {match.params.album}</h2>
      <p>some lyrics here</p>
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
