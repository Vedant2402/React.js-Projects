import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter city name..."
      />
      <button className="search-button" onClick={() => {
        onSearch(city);
        setCity('');
      }}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
