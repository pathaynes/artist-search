import React, { useState, useEffect } from 'react';
import ArtistDeck from './Artist-Deck';
import Search from '../components/Search';
import { getArtists } from '../services/artist-api';
import styles from './Home.css';
import { usePaging } from './Paging';


export default function Home() {

  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { page, handleNext, handleBack } = usePaging();

  const handleSubmit = event => {
    event.preventDefault();
    getArtistsByPage(page);
  };

  useEffect(() => {
    if(searchTerm) {
      getArtistsByPage(page);
    }
  }, [page]);

  const handleChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  const getArtistsByPage = page => {
    getArtists(searchTerm, page)
      .then(({ artists }) => {
        setArtists(artists);
      });
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
}
