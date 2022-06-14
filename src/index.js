import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/home/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

