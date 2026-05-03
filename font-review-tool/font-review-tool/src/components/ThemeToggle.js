import React from "react";
import "./ThemeToggle.css";

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="emoji-toggle-wrapper">
      <div
        className={`emoji-toggle ${theme}`}
        onClick={toggleTheme}
        title="Toggle theme"
      >
        <div className="emoji-track">
          {theme === "light" ? (
            <span className="emoji"></span>
          ) : (
            <span className="emoji"></span>
          )}
        </div>
        <div className="emoji-thumb">{theme === "light" ? "🌞" : "🌙"}</div>
      </div>
      <span className="mode-label">{theme === "light" ? "Light mode" : "Dark mode"}</span>
    </div>
  );
};

export default ThemeToggle;
