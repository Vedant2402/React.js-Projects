// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';
import SongCard from './components/SongCard';

function App() {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);
  const [background, setBackground] = useState('#0f0f0f'); // dark background
  const [view, setView] = useState('top');

  const topSongsQuery = 'top 5 global hits';

  const searchSongs = async (searchTerm = query) => {
    const res = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&limit=6`);
    const data = await res.json();
    setSongs(data.results);
    if (data.results.length > 0) {
      setBackground('#0f0f0f'); // stay in dark mode
    }
  };

  useEffect(() => {
    searchSongs(topSongsQuery);
  }, []);

  useEffect(() => {
    const createTrail = (x, y) => {
      const dot = document.createElement('div');
      dot.className = 'trail-dot';
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
      document.body.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 500);
    };

    const handleMouseMove = (e) => {
      createTrail(e.clientX, e.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSearch = () => {
    searchSongs();
    setView('search');
  };

  const handleBack = () => {
    setQuery('');
    setView('top');
    searchSongs(topSongsQuery);
  };

  return (
    <div className={`app dark-mode ${view === 'top' ? 'default-bg' : ''}`} style={{ backgroundColor: background }}>
      <header className="header">
        <h1>🎶 Vedant's Music Search</h1>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search song..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {view === 'search' && <button className="back-btn" onClick={handleBack}>⬅ Back to Top Songs</button>}
      </div>

      <h2 className="section-title">{view === 'search' ? 'Search Results' : '🌍 Top 5 Hits in the World'}</h2>

      <div className="results">
        {songs.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>

      <footer className="footer">
        <p>Made with ❤️ by Vedant Kankate © 2025</p>
      </footer>
    </div>
  );
}

export default App;