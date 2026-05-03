import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FancyQR, qrCode } from './FancyQR';

function QRGenerator() {
  const [text, setText] = useState('');
  const [size, setSize] = useState(300);
  const [fgColor, setFgColor] = useState('000000');
  const [bgColor, setBgColor] = useState('ffffff');
  const [pattern, setPattern] = useState('square');

  const handleDownload = () => {
    if (!text) {
      toast.error('Please enter some text or URL!');
      return;
    }
    qrCode.download({ name: 'qr_code', extension: 'png' });
    toast.success('QR code downloaded!');
  };

  const handleCopy = () => {
    const canvas = document.querySelector('canvas');
    canvas.toBlob((blob) => {
      const item = new ClipboardItem({ "image/png": blob });
      navigator.clipboard.write([item]);
      toast.info('QR code copied to clipboard!');
    });
  };

  return (
    <div className="qr-container">
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="controls">
        <label>
          Size: {size}px
          <input
            type="range"
            min="100"
            max="500"
            step="50"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </label>

        <div className="color-pickers">
          <div>
            <label>FG Color</label>
            <input
              type="color"
              value={`#${fgColor}`}
              onChange={(e) => setFgColor(e.target.value.slice(1))}
            />
          </div>
          <div>
            <label>BG Color</label>
            <input
              type="color"
              value={`#${bgColor}`}
              onChange={(e) => setBgColor(e.target.value.slice(1))}
            />
          </div>
        </div>

        <div className="dropdown">
          <label>Pattern</label>
          <select value={pattern} onChange={(e) => setPattern(e.target.value)}>
            <option value="square">Square</option>
            <option value="dots">Dots</option>
            <option value="rounded">Rounded</option>
            <option value="classy">Classy</option>
            <option value="classy-rounded">Classy Rounded</option>
            <option value="extra-rounded">Extra Rounded</option>
          </select>
        </div>
      </div>

      {text && (
        <>
          <FancyQR
            data={text}
            fgColor={`#${fgColor}`}
            bgColor={`#${bgColor}`}
            pattern={pattern}
          />
          <div className="button-group">
            <button onClick={handleDownload}>⬇ Download</button>
            <button onClick={handleCopy}>📋 Copy</button>
          </div>
        </>
      )}
    </div>
  );
}

export default QRGenerator;
