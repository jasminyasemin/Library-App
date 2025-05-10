import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MainLayout.css';

// Layout component that wraps all routes with a sidebar and main content area
const MainLayout = () => {
  const [toastPosition, setToastPosition] = useState('bottom-right');

  // Dynamically adjust toast position based on screen width
  useEffect(() => {
    const updateToastPosition = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1200) {
        setToastPosition('top-center');
      } else {
        setToastPosition('bottom-right');
      }
    };

    updateToastPosition(); // Set initial position
    window.addEventListener('resize', updateToastPosition);
    return () => window.removeEventListener('resize', updateToastPosition);
  }, []);

  return (
    <div className="layout">
      {/* Sidebar navigation is always visible */}
      <Navbar />

      {/* The Outlet renders the matched child route component */}
      <div className="content">
        <Outlet />
      </div>

      {/* Global toast notification container with dynamic position */}
      <ToastContainer position={toastPosition} />
    </div>
  );
};

export default MainLayout;