import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// DictionaryAPI configuration (No API key required)
const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

// Word suggestions (you can expand this list as needed)
const wordSuggestions = [
  "serendipity", "ephemeral", "quintessential", "eloquence", 
  "luminous", "resonance", "ethereal", "solitude", "petrichor",
  "aurora", "sonorous", "limerence", "epiphany", "halcyon", 
  "effervescent", "sonder", "opulence", "ineffable"
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestionWord, setSuggestionWord] = useState(getRandomWord());
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordSuggestions.length);
    return wordSuggestions[randomIndex];
  }

  // Updated searchWord function for DictionaryAPI
  const searchWord = async (word) => {
    setLoading(true);
    setError(null);
    setResults(null);
    setSuggestions([]);

    try {
      const response = await axios.get(`${BASE_URL}/${word.toLowerCase()}`);
      console.log("API Response:", response.data);  // Log the response from the API

      if (response.data.length === 0) {
        setError('Word not found. Try one of these suggestions:');
        // Provide better suggestions based on related words
        const similarWords = wordSuggestions.filter(w =>
          w.toLowerCase().includes(word.toLowerCase()) ||
          w.length === word.length
        ).slice(0, 5);
        setSuggestions(similarWords);
      } else {
        setResults(response.data);
      }
    } catch (err) {
      console.error('API Error:', err);  // Log the error for debugging

      // Detailed logging based on the error
      if (err.response) {
        console.error('Error Response:', err.response);
        setError(`Error fetching word definition: ${err.response.statusText}`);
      } else if (err.request) {
        console.error('Error Request:', err.request);
        setError('Error fetching word definition. Please check your connection.');
      } else {
        console.error('Error Message:', err.message);
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchWord(searchTerm);
    }
  };

  const handleSuggestionClick = (word) => {
    setSearchTerm(word);
    searchWord(word);
  };

  // Change suggestion word periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setSuggestionWord(getRandomWord());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Automatically detect system dark mode preference
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="header">
        <h1 className="logo">Vedant's Dictionary App</h1>
        <h2 className="tagline">Find the perfect word</h2>
        <p className="suggestion">Try "<span className="suggestion-word">{suggestionWord}</span>" or any word...</p>
      </header>

      <div className="search-container">
        <h3 className="search-label">Search</h3>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Enter a word..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <span className="search-icon">🔍</span>
            <span className="search-text">Search</span>
          </button>
        </form>
      </div>

      <div className="divider"></div>

      <div className="content-area">
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Searching for "{searchTerm}"...</p>
          </div>
        )}

        {error && (
          <div className="error-state">
            <p>{error}</p>
            {suggestions.length > 0 ? (
              <div className="suggestions">
                {suggestions.map((word, index) => (
                  <button
                    key={index}
                    className="suggestion-button"
                    onClick={() => handleSuggestionClick(word)}
                  >
                    {word}
                  </button>
                ))}
              </div>
            ) : (
              <p>No suggestions available. Try checking the spelling or using a different word.</p>
            )}
          </div>
        )}

        {results && (
          <div className="results-container">
            <div className="word-header">
              <h2 className="word-title">{results[0].word}</h2>
            </div>

            {results[0].meanings.map((meaning, index) => (
              <div key={index} className="lexical-entry">
                <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>
                {meaning.definitions.map((definition, defIndex) => (
                  <div key={defIndex} className="sense">
                    <p className="definition">
                      <span className="definition-number">{defIndex + 1}.</span> {definition.definition}
                    </p>
                    {definition.example && (
                      <p className="example">Example: "{definition.example}"</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {!loading && !error && !results && (
          <div className="empty-state">
            <h3>Start exploring words</h3>
            <p>Type any word in the search box above to find its definition, pronunciation, and examples.</p>
          </div>
        )}
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Vedant Dictionary. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Vedant2402">Github</a>
          <a href="/privacyhttps://www.linkedin.com/in/vedant-kankate/">LinkedIn</a>
          <a href="mailto:vedantkankate22@gmail.com">Mail</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
