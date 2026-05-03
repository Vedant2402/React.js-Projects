// App.js
import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";
import FontPreview from "./components/FontPreview";
import FontControls from "./components/FontControls";
import ThemeToggle from "./components/ThemeToggle";
import "./styles.css";

const fontOptions = [
  "Roboto",
  "Open Sans",
  "Lobster",
  "Montserrat",
  "Raleway",
  "Poppins",
  "Playfair Display",
  "Fira Sans",
];

function App() {
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog.");
  const [fontSize, setFontSize] = useState(24);
  const [fontWeight, setFontWeight] = useState(400);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    WebFont.load({ google: { families: fontOptions } });
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="header-content">
          <h1>🖋️ Font Review Tool</h1>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </header>

      <main className="app">
        <textarea
          className="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something here..."
        />
        <FontControls
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontWeight={fontWeight}
          setFontWeight={setFontWeight}
          letterSpacing={letterSpacing}
          setLetterSpacing={setLetterSpacing}
          lineHeight={lineHeight}
          setLineHeight={setLineHeight}
        />
        <div className="preview-container">
          {fontOptions.map((font) => (
            <FontPreview
              key={font}
              font={font}
              text={text}
              fontSize={fontSize}
              fontWeight={fontWeight}
              letterSpacing={letterSpacing}
              lineHeight={lineHeight}
            />
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <p>💡 Made with React by Vedant Kankate • Font Preview Tool • 2025</p>
      </footer>
    </div>
  );
}

export default App;