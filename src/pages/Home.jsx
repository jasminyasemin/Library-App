import React from 'react';
import BookCard from '../components/BookCard';
import '../styles/Home.css';

// The Home component serves as the main landing page of the app.
// It includes a discover section, a search bar, and a carousel of recommended books.

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Top section containing the Discover title, search input, and book carousel */}
      <div className="home-top">
        <div className="top-content">
          <h1 className="playfair-display-1">Discover</h1>

          {/* Search bar for users to search for books */}
          <div className="search-bar">
            <input type="text" placeholder="find the book you like..." />
            <button type="submit">Search</button>
          </div>

          {/* Section title for the carousel */}
          <h2 className="section-title">Book Recommendations</h2>

          {/* Book carousel displaying recommended book covers */}
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

      {/* Empty bottom section for potential future content */}
      <div className="home-bottom">
        
      </div>
    </div>
  );
};

export default Home;