import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PollProvider } from './context/PollContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PollProvider>
        <App />
      </PollProvider>
    </BrowserRouter>
  </React.StrictMode>
);
