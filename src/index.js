import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Blog from './pages/blog/Blog';
import Pathways from './pages/Pathways';
import './index.css';

render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />}>
          <Route path=":postId" element={<Blog />} />
        </Route>
        <Route path="/pathways" element={<Pathways />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
