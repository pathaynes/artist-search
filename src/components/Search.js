import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="artistSearch" placeholder="Artist Name" onChange={handleChange}></input> 
      <button>Search</button>
    </form>
  );
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
