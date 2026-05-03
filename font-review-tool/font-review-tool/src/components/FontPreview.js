import React from "react";

const FontPreview = ({ font, text, fontSize, fontWeight, letterSpacing, lineHeight }) => {
  const style = {
    fontFamily: font,
    fontSize: `${fontSize}px`,
    fontWeight,
    letterSpacing: `${letterSpacing}px`,
    lineHeight,
  };

  const handleCopy = () => {
    const cssSnippet = `
font-family: '${font}';
font-size: ${fontSize}px;
font-weight: ${fontWeight};
letter-spacing: ${letterSpacing}px;
line-height: ${lineHeight};`.trim();

    navigator.clipboard.writeText(cssSnippet);
  };

  return (
    <div className="font-preview">
      <div className="font-header">
        <h3 style={{ fontFamily: font }}>{font}</h3>
        <button className="copy-icon-btn" onClick={handleCopy} title="Copy CSS Styles">
          📋
        </button>
      </div>
      <p style={style}>{text}</p>
    </div>
  );
};

export default FontPreview;
