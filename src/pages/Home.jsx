import React from 'react';
import BookCard from '../components/BookCard';
import CategoryCard from '../components/CategoryCard';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-top">
        <div className="top-content">
          <h1 className="discover">Discover</h1>

          <div className="search-bar">
            <input type="text" placeholder="find the book you like..." />
            <button type="submit">Search</button>
          </div>
          <h2 className="section-title">Book Recomendations</h2>

        <div className="carousel">
          <BookCard title="The Psychology of Money" author="Morgan Housel" img="psychology.jpg" />
          <BookCard title="Company of One" author="Paul Jarvis" img="company.jpg" />
          <BookCard title="The Picture of Dorian Gray" author="Oscar Wilde" img="dorian.jpg" />
        </div>
        </div>
      </div>

      <div className="home-bottom">
        
      </div>
    </div>
  );
};

export default Home;