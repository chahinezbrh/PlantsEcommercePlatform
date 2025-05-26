// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home'; // Import the Home component
import './index.css'; // Import the global CSS file (if needed)
import App from './App'
import './App.css'
import Login from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);