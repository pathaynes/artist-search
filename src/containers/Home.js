import React, { useEffect, useState } from 'react';
import ArtistDeck from './Artist-Deck';
import Search from '../components/Search';
import { getArtists } from '../services/artist-api';
import styles from './Home.css';

const Home = () => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [artistName, setArtistName] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if(!searchTerm)
      return;
      
    getArtists(artistName, page)
      .then(({ artists }) => {
        setArtists(artists);
      });
  }, [artistName, page]);

  const handleSubmit = event => {
    event.preventDefault();
    setArtistName(searchTerm);
  };

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handleBack = () => {
    const newPage = Math.max(1, page - 1);
    setPage(newPage);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.Home}>
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange} />
      <ArtistDeck
        artists={artists}
        handleBack={handleBack}
        handleNext={handleNext} />
    </div>
  );
};

export default Home;
