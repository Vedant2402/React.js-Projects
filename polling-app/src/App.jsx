import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className="app-wrapper">
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/">Home</Link>
            <Link to="/create">Create Poll</Link>
          </div>
          <div className="nav-right">
            <div className="toggle-switch" onClick={toggleTheme}>
              <div className={`switch ${darkMode ? 'switch-dark' : 'switch-light'}`}>
                {darkMode ? <FaMoon className="icon" /> : <FaSun className="icon" />}
              </div>
              <span className="toggle-label">{darkMode ? 'Dark' : 'Light'}</span>
            </div>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 Vedant Kankate. All Rights Reserved.</p>
          <a href="mailto:vedantkankate22@gmail.com" className="email-link">Email Me</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
