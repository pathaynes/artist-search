import { useState, useEffect } from 'react';
import { getAlbums } from '../services/artist-api';

export const useAlbums = (page = 1) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums(page)
      .then(fetchedAlbums => setAlbums(fetchedAlbums));
  }, [page]);

  return albums;
};
