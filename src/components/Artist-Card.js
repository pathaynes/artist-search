import React from 'react';
import PropTypes from 'prop-types';

export default function ArtistCard({ name }) {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired
};


