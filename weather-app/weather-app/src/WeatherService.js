import axios from 'axios';

const API_KEY = 'ADD YOU API KEY HERE';
const BASE_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&aqi=yes&hours=6`;

const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}&q=${city}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch weather:", error);
    return null;
  }
};

export { fetchWeather };
