import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; 

// This component renders the sidebar navigation menu
const Navbar = () => {
  return (
    <aside className="sidebar">
      {/* Application title */}
      <h2 className="inter-1"> THE LIBRARY</h2>

      {/* Navigation menu with route links */}
      <nav className="nav-menu">

        {/* Link to Home page with hover and active visual behavior */}
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <lord-icon
            class="nav-icon"
            src="https://cdn.lordicon.com/cnpvyndp.json"
            trigger="hover"
            colors="primary:#ffffff"
          ></lord-icon>
          <span className="nav-text">Discover</span>
        </NavLink>

        {/* Link to Categories */}
        <NavLink to="/categories" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/hqymfzvj.json" trigger="morph" colors="primary:#ffffff" />
          <span className="nav-text">Category</span>
        </NavLink>

        {/* Link to Books */}
        <NavLink to="/books" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/zyzoecaw.json" trigger="morph" state="morph-book" colors="primary:#ffffff" />
          <span className="nav-text">Books</span>
        </NavLink>

        {/* Link to Rentals */}
        <NavLink to="/rentals" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/evyuuwna.json" trigger="morph" state="hover-shopping-bag-2" colors="primary:#ffffff" />
          <span className="nav-text">Rent</span>
        </NavLink>

        {/* Link to Authors */}
        <NavLink to="/authors" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/kthelypq.json" trigger="morph" colors="primary:#ffffff" />
          <span className="nav-text">Authors</span>
        </NavLink>

        {/* Link to Publishers */}
        <NavLink to="/publishers" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/ijahpotn.json" trigger="morph" colors="primary:#ffffff" />
          <span className="nav-text">Publishers</span>
        </NavLink>

        {/* Link to Favorites */}
        <NavLink to="/favorites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/xyboiuok.json" trigger="morph" colors="primary:#ffffff" />
          <span className="nav-text">Favorites</span>
        </NavLink> 

        {/* Divider for support links */}
        <div className='line'></div>

        {/* Link to Settings */}
        <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/lecprnjb.json" trigger="morph" colors="primary:#ffffff" />
          <span className="nav-text">Settings</span>
        </NavLink>

        {/* Link to Help */}
        <NavLink to="/help" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/axteoudt.json" trigger="morph" colors="primary:#ffffff" />
          <span className="nav-text">Help</span>
        </NavLink>

      </nav>
    </aside>
  );
};

export default Navbar;