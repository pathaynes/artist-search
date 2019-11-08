import React, { useState } from 'react';
import ArtistDeck from './Artist-Deck';
import Search from '../components/Search';
import { useArtists } from '../hooks/Artists';
import { usePaging } from '../hooks/Paging';
import styles from './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [artistName, setArtistName] = useState('');
  const { page, increment, decrement } = usePaging();
  const artists = useArtists(artistName, page);

  const handleSubmit = event => {
    event.preventDefault();
    setArtistName(searchTerm);
  };

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  return (
    <div className={styles.Home}>
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange} />
      <ArtistDeck
        artists={artists}
        handleBack={decrement}
        handleNext={increment} />
    </div>
  );
};

export default Home;
