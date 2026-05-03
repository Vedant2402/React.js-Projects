import React, { useState } from 'react';
import './App.css';
import SongCard from './components/SongCard';
import { useEffect } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);
  const [background, setBackground] = useState('');

  const searchSongs = async () => {
    const res = await fetch(`https://itunes.apple.com/search?term=${query}&limit=5`);
    const data = await res.json();
    setSongs(data.results);
    if (data.results.length > 0) {
      setBackground(data.results[0].artworkUrl100.replace('100x100', '600x600'));
    }
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="search-container">
        <input
          type="text"
          placeholder="Search song..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchSongs}>Search</button>
      </div>

      <div className="results">
        {songs.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </div>
  );
}

export default App;
