import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;