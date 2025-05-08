// Import React core libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import main application component
import App from './App.jsx';

// Import routing and global styles
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// Render the application to the root div in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the entire app with BrowserRouter to enable routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);