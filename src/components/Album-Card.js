import React from 'react';
import PropTypes from 'prop-types';

export default function AlbumCard({ title, release_id }) {
  const imgUrl = `http://coverartarchive.org/release/${release_id}/front`;
  return (
    <div>
      <img src={imgUrl} alt={'cover art'}></img>
      <h2>{title}</h2>
    </div>
  );
}

AlbumCard.propTypes = {
  release_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};


