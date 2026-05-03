import React, { useState } from 'react';

function SongCard({ song }) {
  const [showDetails, setShowDetails] = useState(false);

  const coSingers = song.artistName.includes('&')
    ? song.artistName.split('&').map(s => s.trim())
    : [song.artistName];

  return (
    <div className="song-card">
      <img src={song.artworkUrl100.replace('100x100', '300x300')} alt={song.trackName} />
      <h3>{song.trackName}</h3>
      <p><strong>Co-singers:</strong> {coSingers.join(', ')}</p>

      <button className="add-btn" onClick={() => alert("Added to List!")}>Add to List</button>

      <audio controls src={song.previewUrl}>Your browser does not support audio.</audio>

      <div className="dropdown">
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide' : 'Show'} Artist Info
        </button>
        {showDetails && (
          <div className="dropdown-content">
            <p><strong>Artist:</strong> {song.artistName}</p>
            <p><strong>Genre:</strong> {song.primaryGenreName || 'Unknown'}</p>
            <p><strong>Album:</strong> {song.collectionName}</p>
            <p><strong>Track Price:</strong> {song.trackPrice ? `$${song.trackPrice}` : 'Free'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SongCard;
