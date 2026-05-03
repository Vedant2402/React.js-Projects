import React, { useState, useEffect } from 'react';
import IPInfo from './components/IPInfo';
import './App.css';

function App() {
  const [ip, setIp] = useState('');
  const [data, setData] = useState(null);
  const [input, setInput] = useState('');

  const isPrivateIP = (ip) =>
    /^10\./.test(ip) ||
    /^192\.168\./.test(ip) ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(ip) ||
    /^127\./.test(ip);

  const fetchIPInfo = async (queryIP = '') => {
    const url = queryIP ? `http://ip-api.com/json/${queryIP}` : `http://ip-api.com/json/`;
    const res = await fetch(url);
    const result = await res.json();

    if (result.status === 'fail') {
      alert(`Error: ${result.message}`);
      return;
    }

    setData(result);
    setIp(result.query);
  };

  useEffect(() => {
    fetchIPInfo();
  }, []);

  const handleSearch = () => {
    if (isPrivateIP(input)) {
      alert('Private IP addresses cannot be tracked. Please enter a public IP.');
      return;
    }
    fetchIPInfo(input);
  };

  return (
    <div className="App">
      <h1>IP Address Tracker</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter IP address"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {data && <IPInfo data={data} />}
    </div>
  );
}

export default App;
