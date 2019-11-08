import React, { useState } from 'react';

export function usePaging() {

  const [page, setPage] = useState(1);

  const handleBack = () => {
    const newPage = Math.max(1, page - 1);
    setPage(newPage);
  };

  const handleNext = () => {
    console.log('here');
    setPage(page + 1);
  };


  return { page, handleBack, handleNext };
}
