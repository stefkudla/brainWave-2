import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Blog from './pages/blog/Blog';
import Pathways from './pages/Pathways';
import './index.css';
import ScrollToTop from './components/ScrollToTop';

render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
