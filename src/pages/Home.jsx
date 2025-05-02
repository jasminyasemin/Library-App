import React from 'react';
import BookCard from '../components/BookCard';
import CategoryCard from '../components/CategoryCard';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-top">
        <div className="top-content">
          <h1 className="playfair-display-1">Discover</h1>

          <div className="search-bar">
            <input type="text" placeholder="find the book you like..." />
            <button type="submit">Search</button>
          </div>
          <h2 className="section-title">Book Recommendations</h2>

        <div className="carousel-wrapper">
        <div className="carousel">
            <BookCard img="anna.jpg" coverOnly />
            <BookCard img="circe.jpg" coverOnly />
            <BookCard img="darker.jpg" coverOnly />
            <BookCard img="nations.jpg" coverOnly />
</div>
        </div>
        </div>
      </div>

      <div className="home-bottom">
        
      </div>
    </div>
  );
};

export default Home;