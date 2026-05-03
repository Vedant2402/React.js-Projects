import React from 'react';

const QuoteBox = ({ quote, author }) => {
  return (
    <div className="quote-box">
      <p className="quote">“{quote}”</p>
      <p className="author">- {author}</p>
    </div>
  );
};

export default QuoteBox;
