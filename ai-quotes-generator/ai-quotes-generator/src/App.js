// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchQuote } from './api/fetchQuote';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const [quoteData, setQuoteData] = useState({ content: '', author: '' });
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNewQuote = async () => {
    setLoading(true);
    try {
      const data = await fetchQuote();
      setHistory(prev => [quoteData, ...prev.slice(0, 9)]);
      setQuoteData({ content: data.content, author: data.author });
    } catch {
      setQuoteData({ content: "Oops! Couldn't fetch a quote.", author: "AI Bot" });
    }
    setLoading(false);
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="navbar-title">✨ AI Quotes</h2>
      </nav>

      <div className="glass-card">
        <h1>AI Quotes Generator</h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={quoteData.content}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="quote-box"
          >
            <p className="quote">“{quoteData.content}”</p>
            <p className="author">— {quoteData.author}</p>
          </motion.div>
        </AnimatePresence>

        <button className="glow-button" onClick={getNewQuote} disabled={loading}>
          {loading ? 'Loading...' : 'Generate New Quote'}
        </button>

        {history.length > 0 && (
          <div className="history-slider">
            <h3>Quote History</h3>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {history.map((q, i) => (
                <SwiperSlide key={i}>
                  <div className="slide-card">
                    <p className="quote">“{q.content}”</p>
                    <p className="author">— {q.author}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
      <footer className="footer">
        <p>
          Made with ❤️ by <strong>Vedant Kankate</strong> ·
          <a href="https://vedant-kankate.netlify.app/" target="_blank" rel="noopener noreferrer"> Portfolio</a> ·
          <a href="https://github.com/vedant2402" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
