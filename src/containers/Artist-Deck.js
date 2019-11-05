import React from 'react';
import PropTypes from 'prop-types';
import ArtistCard from '../components/Artist-Card';

export default function ArtistDeck({ artists, handleNext, handleBack }) {
  const cards = artists.map(artist => {
    return (
      <li key={artist.id}>
        <ArtistCard name={artist.name} />
      </li>
    );
  });

  return (
    <section>
      <button onClick={handleBack}>Back</button>
      <ul>
        {cards}
      </ul>
      <button onClick={handleNext}>Next</button>
    </section>
  );
}

ArtistDeck.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
};
