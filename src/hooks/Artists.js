import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArtists } from '../services/artist-api';

export const useArtists = () => {
  const [name, setName] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getArtists(id)
      .then(({ artists }) => {
        setName(artists);
      });
  }, [id]);

  return [name, id];
};
