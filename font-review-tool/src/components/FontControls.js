import React from "react";

const Slider = ({ label, value, min, max, step, onChange }) => (
  <label className="slider-label">
    {label}: {value}
    <input type="range" min={min} max={max} step={step} value={value} onChange={onChange} />
  </label>
);

const FontControls = ({
  fontSize,
  setFontSize,
  fontWeight,
  setFontWeight,
  letterSpacing,
  setLetterSpacing,
  lineHeight,
  setLineHeight,
}) => {
  return (
    <div className="controls">
      <Slider label="Font Size" value={fontSize} min={12} max={72} step={1} onChange={(e) => setFontSize(Number(e.target.value))} />
      <Slider label="Font Weight" value={fontWeight} min={100} max={900} step={100} onChange={(e) => setFontWeight(Number(e.target.value))} />
      <Slider label="Letter Spacing" value={letterSpacing} min={-5} max={20} step={0.5} onChange={(e) => setLetterSpacing(Number(e.target.value))} />
      <Slider label="Line Height" value={lineHeight} min={1} max={3} step={0.1} onChange={(e) => setLineHeight(Number(e.target.value))} />
    </div>
  );
};

export default FontControls;
