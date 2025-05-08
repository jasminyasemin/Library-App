// Import necessary modules and components
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './MainLayout.css';

// Layout component that wraps all routes with a sidebar and main content area
const MainLayout = () => {
  return (
    <div className="layout">
      {/* Sidebar navigation is always visible */}
      <Navbar />
      
      {/* The Outlet renders the matched child route component */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;