import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo"> THE LIBRARY</h2>
      <nav className="nav-menu">
      <NavLink to="/" className="nav-link">
        <lord-icon
            class="nav-icon"
            src="https://cdn.lordicon.com/cnpvyndp.json"
            trigger="hover"
            colors="primary:#545454"
            style={{ width: "25px", height: "25px" }}>
        </lord-icon>
          <span className="nav-text">Discover</span>
      </NavLink>

      <NavLink to="/categories" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/hqymfzvj.json" trigger="morph" colors="primary:#545454" style={{ width: '25px', height: '25px' }} />
          <span className="nav-text">Category</span>
        </NavLink>

        <NavLink to="/books" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/zyzoecaw.json" trigger="morph" state="morph-book" colors="primary:#545454" style={{ width: '25px', height: '25px' }} />
          <span className="nav-text">Library</span>
        </NavLink>

        <NavLink to="/rentals" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/smwmetfi.json" trigger="morph" colors="primary:#545454" style={{ width: '25px', height: '25px' }} />
          <span className="nav-text">Download</span>
        </NavLink>

        <NavLink to="/authors" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/xyboiuok.json" trigger="morph" colors="primary:#545454" style={{ width: '25px', height: '25px' }} />
          <span className="nav-text">Favorites</span>
        </NavLink>

        <NavLink to="/publishers" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/ijahpotn.json" trigger="morph" colors="primary:#545454" style={{ width: '25px', height: '25px' }} />
          <span className="nav-text">Publishers</span>
        </NavLink>

        <NavLink to="/settings" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/lecprnjb.json" trigger="morph" colors="primary:#545454" style={{ width: '25px', height: '25px' }} />
          <span className="nav-text">Settings</span>
        </NavLink>

        <NavLink to="/help" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/axteoudt.json" trigger="morph" colors="primary:#545454" style={{ width: '25px', height: '25px' }} />
          <span className="nav-text">Help</span>
        </NavLink>

        <NavLink to="/logout" className="nav-link">
          <lord-icon class="nav-icon" src="https://cdn.lordicon.com/kthelypq.json" trigger="morph" colors="primary:#545454" style={{ width: '25px', height: '25px' }} />
          <span className="nav-text">Logout</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Navbar;