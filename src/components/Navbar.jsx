import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; 

// This component renders the sidebar navigation menu
const Navbar = () => {
  return (
    <aside className="sidebar">
      {/* App title */}
      <h2 className="inter-1"> THE LIBRARY</h2>

      {/* Navigation section with multiple links */}
      <nav className="nav-menu">

        {/* Link to the Discover (Home) page */}
        <NavLink to="/" className="nav-link">
          <lord-icon
            class="nav-icon"
            src="https://cdn.lordicon.com/cnpvyndp.json"
            trigger="hover"
            colors="primary:#ffffff"
          >
          </lord-icon>
          <span className="nav-text">Discover</span>
        </NavLink>

        {/* Link to the Categories page */}
        <NavLink to="/categories" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/hqymfzvj.json" trigger="morph" colors="primary:#ffffff" />
          <span className="nav-text">Category</span>
        </NavLink>

        {/* Link to the Books page */}
        <NavLink to="/books" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/zyzoecaw.json" trigger="morph" state="morph-book" colors="primary:#ffffff" />
          <span className="nav-text">Library</span>
        </NavLink>

        {/* Link to the Book Rentals page */}
        <NavLink to="/rentals" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/evyuuwna.json" trigger="morph" state="hover-shopping-bag-2" colors="primary:#ffffff" />
          <span className="nav-text">Rent</span>
        </NavLink>

        {/* Link to the Authors page */}
        <NavLink to="/authors" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/kthelypq.json" trigger="morph" colors="primary:#ffffff" />
          <span className="nav-text">Authors</span>
        </NavLink>

        {/* Link to the Publishers page */}
        <NavLink to="/publishers" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/ijahpotn.json" trigger="morph" colors="primary:#ffffff" />
          <span className="nav-text">Publishers</span>
        </NavLink>

        {/* Link to the Favorites page */}
        <NavLink to="/favs" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/xyboiuok.json" trigger="morph" colors="primary:#ffffff" />
          <span className="nav-text">Favorites</span>
        </NavLink> 

        {/* Divider line between main and support links */}
        <div className='line'></div>

        {/* Link to the Settings page */}
        <NavLink to="/settings" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/lecprnjb.json" trigger="morph" colors="primary:#ffffff" />
          <span className="nav-text">Settings</span>
        </NavLink>

        {/* Link to the Help page */}
        <NavLink to="/help" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/axteoudt.json" trigger="morph" colors="primary:#ffffff" />
          <span className="nav-text">Help</span>
        </NavLink>

      </nav>
    </aside>
  );
};

export default Navbar;