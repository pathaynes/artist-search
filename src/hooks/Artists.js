import { useState, useEffect } from 'react';
import { getArtists } from '../services/artist-api';

export const useArtists = (searchTerm, page) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if(!searchTerm) return;
    getArtists(searchTerm, page)
      .then(({ artists }) => {
        setArtists(artists);
      });
  }, [searchTerm, page]);

  return artists;
};
