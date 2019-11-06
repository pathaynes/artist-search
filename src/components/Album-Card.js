import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';

export default function AlbumCard({ title, release_id }) {
  const imgUrl = `http://coverartarchive.org/release/${release_id}/front`;
  return (
    <div>
      <Img src={[imgUrl, '/src/assets/album-placeholder.jpg']} alt={'cover art'} />
      <h2>{title}</h2>
    </div>
  );
}

AlbumCard.propTypes = {
  release_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};


