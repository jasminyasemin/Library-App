import React from 'react';
import '../styles/Card.css'; 

function CategoryCard({ title, img }) {
  return (
    <div className="card">
      <img src={`/images/${img}`} alt={title} className="card-image" />
      <p className="card-title">{title}</p>
    </div>
  );
}

export default CategoryCard;