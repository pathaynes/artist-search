import { useState } from 'react';

export const usePaging = () => {
  const [page, setPage] = useState(1);

  const decrement = () => setPage(oldPage => oldPage - 1);
  const increment = () => setPage(oldPage => oldPage + 1);

  return { page, decrement, increment };
};
