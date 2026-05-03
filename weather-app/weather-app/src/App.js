import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { fetchWeather } from './WeatherService';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [theme, setTheme] = useState('default');

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    if (data) {
      setWeather(data);
      const condition = data.current.condition.text.toLowerCase();

      // Set theme based on condition
      if (condition.includes('sunny')) setTheme('sunny');
      else if (condition.includes('cloud') || condition.includes('overcast')) setTheme('cloudy');
      else if (condition.includes('rain') || condition.includes('drizzle')) setTheme('rainy');
      else if (condition.includes('snow')) setTheme('snowy');
      else setTheme('default');
    }
  };

  return (
    <div className={`app-container ${theme}`}>
      <SearchBar onSearch={handleSearch} />
      {weather && (
        <div className="weather-info">
          <h1>{weather.location.name}, {weather.location.country}</h1>
          <p>{weather.current.temp_c}°C</p>
          <p>{weather.current.condition.text}</p>
          <p>Air Quality Index (AQI): {weather.current.air_quality?.pm2_5 ?? 'N/A'}</p>
        </div>
      )}
      <footer>
        <p>Weather App by <strong>Vedant Kankate</strong> © 2025</p>
      </footer>
    </div>
  );
};

export default App;
