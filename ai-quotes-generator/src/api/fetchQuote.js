import axios from 'axios';

export const fetchQuote = async () => {
  const response = await axios.get('https://api.quotable.io/random');
  return response.data;
};
