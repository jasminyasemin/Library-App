import React from 'react';
import '../styles/Card.css';

const BookCard = ({ title, author, img }) => {
  return (
    <div className="card">
      <img src={`/images/${img}`} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">{author}</p>
    </div>
  );
};

export default BookCard;