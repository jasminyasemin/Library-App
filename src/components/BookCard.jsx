import React from 'react';
import '../styles/BookCard.css';

// Reusable card component to display a book cover (and optionally title & author)
const BookCard = ({ title, author, img, coverOnly = false }) => {
  return (
    // Conditionally adds the 'cover-only' class if only the cover is to be shown
    <div className={`book-card ${coverOnly ? 'cover-only' : ''}`}>
      
      {/* Book cover image loaded from the public/images folder */}
      <img src={`/images/${img}`} alt={title} />

      {/* If 'coverOnly' is false, show title and author under the image */}
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