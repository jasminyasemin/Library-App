import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ title, author, img, coverOnly = false }) => {
  return (
    <div className={`book-card ${coverOnly ? 'cover-only' : ''}`}>
      <img src={`/images/${img}`} alt={title} />
      {!coverOnly && (
        <div className="book-info">
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
      )}
    </div>
  );
};

export default BookCard;