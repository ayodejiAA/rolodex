import React from 'react';
import './SearchBox.css';

const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
  );
};

export default SearchBox;
